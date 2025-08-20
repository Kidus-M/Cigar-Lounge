// pages/admin/events.jsx
'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { auth, db } from '../../lib/firebase';
// Firebase config
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


// SendGrid email sending
const sendEmail = async (to, subject, message) => {
    const data = {
        personalizations: [{ to: [{ email: to }] }],
        from: { email: 'admin@wolfdenlounge.com' }, // Replace with your verified sender
        subject,
        content: [{ type: 'text/plain', value: message }],
    };

    try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Email send failed');
    } catch (error) {
        console.error('Email error:', error);
    }
};

const sendConfirmationEmail = (to, event) => {
    const message = `You are registered for ${event.name} on ${new Date(event.date).toDateString()}.`;
    sendEmail(to, 'Event Registration Confirmation', message);
};

const sendWaitlistEmail = (to, event) => {
    const message = `You are waitlisted for ${event.name} on ${new Date(event.date).toDateString()}. We will notify you if a spot opens up.`;
    sendEmail(to, 'Event Waitlist Notification', message);
};

const sendPromotionEmail = (to, event) => {
    const message = `Great news! You have been promoted from the waitlist and are now registered for ${event.name} on ${new Date(event.date).toDateString()}.`;
    sendEmail(to, 'Event Registration Update', message);
};

const EventsAdmin = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [registrations, setRegistrations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', date: new Date(), description: '', imageUrl: '', maxSpots: 0 });
    const [isEdit, setIsEdit] = useState(false);
    const [selectedRegistrants, setSelectedRegistrants] = useState([]);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [emailData, setEmailData] = useState({ subject: '', message: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [newReg, setNewReg] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                loadEvents();
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);

    const loadEvents = async () => {
        const q = query(collection(db, 'events'), orderBy('date', 'asc'));
        const snapshot = await getDocs(q);
        const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
    };

    const loadRegistrations = async (eventId) => {
        const q = query(collection(db, 'registrations'), where('eventId', '==', eventId), orderBy('registeredAt', 'asc'));
        const snapshot = await getDocs(q);
        const regsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRegistrations(regsData);
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        loadRegistrations(event.id);
        setSelectedRegistrants([]);
    };

    const handleAddEditEvent = async () => {
        const eventData = {
            name: formData.name,
            date: formData.date.toISOString(),
            description: formData.description,
            imageUrl: formData.imageUrl, // Stored as a string
            maxSpots: parseInt(formData.maxSpots),
            createdAt: new Date().toISOString(),
        };
        try {
            if (isEdit) {
                await updateDoc(doc(db, 'events', selectedEvent.id), eventData);
            } else {
                await addDoc(collection(db, 'events'), eventData);
            }
            setShowForm(false);
            setFormData({ name: '', date: new Date(), description: '', imageUrl: '', maxSpots: 0 });
            loadEvents();
        } catch (error) {
            console.error('Event save error:', error);
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteDoc(doc(db, 'events', eventId));
            loadEvents();
            setSelectedEvent(null);
        } catch (error) {
            console.error('Event delete error:', error);
        }
    };

    const handleRemoveRegistration = async (regId) => {
        try {
            const regRef = doc(db, 'registrations', regId);
            const regSnap = await getDoc(regRef);
            const reg = regSnap.data();
            if (reg.status === 'registered') {
                const q = query(
                    collection(db, 'registrations'),
                    where('eventId', '==', selectedEvent.id),
                    where('status', '==', 'waitlisted'),
                    orderBy('registeredAt', 'asc')
                );
                const snapshot = await getDocs(q);
                if (snapshot.docs.length > 0) {
                    const promoteRef = snapshot.docs[0].ref;
                    const promoteData = snapshot.docs[0].data();
                    await updateDoc(promoteRef, { status: 'registered' });
                    sendPromotionEmail(promoteData.email, selectedEvent);
                }
            }
            await deleteDoc(regRef);
            loadRegistrations(selectedEvent.id);
        } catch (error) {
            console.error('Registration remove error:', error);
        }
    };

    const handleAddRegistration = async (e) => {
        e.preventDefault();
        try {
            const registeredCount = registrations.filter(r => r.status === 'registered').length;
            const status = registeredCount < selectedEvent.maxSpots ? 'registered' : 'waitlisted';
            const regData = {
                eventId: selectedEvent.id,
                name: newReg.name,
                email: newReg.email,
                phone: newReg.phone,
                status,
                registeredAt: new Date().toISOString(),
            };
            await addDoc(collection(db, 'registrations'), regData);
            if (status === 'registered') {
                sendConfirmationEmail(newReg.email, selectedEvent);
            } else {
                sendWaitlistEmail(newReg.email, selectedEvent);
            }
            setNewReg({ name: '', email: '', phone: '' });
            loadRegistrations(selectedEvent.id);
        } catch (error) {
            console.error('Registration add error:', error);
        }
    };

    const handleSendEmails = async () => {
        try {
            const selected = registrations.filter(r => selectedRegistrants.includes(r.id));
            for (const reg of selected) {
                await sendEmail(reg.email, emailData.subject, emailData.message);
            }
            setShowEmailForm(false);
            setEmailData({ subject: '', message: '' });
            setSelectedRegistrants([]);
        } catch (error) {
            console.error('Bulk email error:', error);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (!user) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-2xl text-green-600 mb-4">Admin Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
                </div>
            </div>
        );
    }

    const registeredCount = registrations.filter(r => r.status === 'registered').length;
    const waitlistedCount = registrations.filter(r => r.status === 'waitlisted').length;

    return (
        <div className="bg-black min-h-screen text-white">
            <nav className="bg-gray-900 p-4 flex justify-between">
                <h1 className="text-2xl text-green-600">Admin Dashboard</h1>
                <button onClick={handleLogout} className="text-green-600 hover:text-green-700">Logout</button>
            </nav>
            <div className="flex flex-col md:flex-row p-4">
                {/* Left Column: Event List */}
                <div className="md:w-1/3 pr-4">
                    <h2 className="text-2xl text-green-600 mb-4">Events</h2>
                    <button
                        onClick={() => {
                            setShowForm(true);
                            setIsEdit(false);
                            setFormData({ name: '', date: new Date(), description: '', imageUrl: '', maxSpots: 0 });
                        }}
                        className="bg-green-600 px-4 py-2 mb-4 rounded hover:bg-green-700"
                    >
                        Add Event
                    </button>
                    <ul className="space-y-4">
                        {events.map(event => (
                            <li
                                key={event.id}
                                className="bg-gray-800 p-4 rounded cursor-pointer hover:bg-gray-700"
                                onClick={() => handleSelectEvent(event)}
                            >
                                <h3 className="text-green-600">{event.name}</h3>
                                <p>{new Date(event.date).toDateString()}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowForm(true);
                                        setIsEdit(true);
                                        setFormData({
                                            name: event.name,
                                            date: new Date(event.date),
                                            description: event.description,
                                            imageUrl: event.imageUrl,
                                            maxSpots: event.maxSpots,
                                        });
                                    }}
                                    className="text-blue-400 mr-2 hover:text-blue-300"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteEvent(event.id);
                                    }}
                                    className="text-red-400 hover:text-red-300"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right Column: Selected Event Details + Registrations */}
                <div className="md:w-2/3 pl-4">
                    {selectedEvent && (
                        <>
                            <h2 className="text-2xl text-green-600 mb-4">{selectedEvent.name} Details</h2>
                            <p>Date: {new Date(selectedEvent.date).toDateString()}</p>
                            <p>Description: {selectedEvent.description}</p>
                            <p>Image URL: {selectedEvent.imageUrl}</p>
                            <p>Capacity: {registeredCount}/{selectedEvent.maxSpots} filled, {waitlistedCount} waitlisted</p>
                            <h3 className="text-xl text-green-600 mt-6 mb-4">Registrations</h3>
                            {/* Add Registration Form */}
                            <form onSubmit={handleAddRegistration} className="mb-6">
                                <h4 className="text-lg text-green-600 mb-2">Add New Registration</h4>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newReg.name}
                                    onChange={(e) => setNewReg({ ...newReg, name: e.target.value })}
                                    className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={newReg.email}
                                    onChange={(e) => setNewReg({ ...newReg, email: e.target.value })}
                                    className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={newReg.phone}
                                    onChange={(e) => setNewReg({ ...newReg, phone: e.target.value })}
                                    className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                />
                                <button type="submit" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                                    Add Registration
                                </button>
                            </form>
                            <table className="w-full bg-gray-800 rounded">
                                <thead>
                                <tr className="bg-gray-700">
                                    <th className="p-2">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => setSelectedRegistrants(e.target.checked ? registrations.map(r => r.id) : [])}
                                        />
                                    </th>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Phone</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {registrations.map(reg => (
                                    <tr key={reg.id} className="border-b border-gray-700">
                                        <td className="p-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedRegistrants.includes(reg.id)}
                                                onChange={(e) =>
                                                    setSelectedRegistrants(
                                                        e.target.checked
                                                            ? [...selectedRegistrants, reg.id]
                                                            : selectedRegistrants.filter(id => id !== reg.id)
                                                    )
                                                }
                                            />
                                        </td>
                                        <td className="p-2">{reg.name}</td>
                                        <td className="p-2">{reg.email}</td>
                                        <td className="p-2">{reg.phone}</td>
                                        <td className="p-2">{reg.status}</td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => handleRemoveRegistration(reg.id)}
                                                className="text-red-400 hover:text-red-300"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            {selectedRegistrants.length > 0 && (
                                <button
                                    onClick={() => setShowEmailForm(true)}
                                    className="bg-green-600 px-4 py-2 mt-4 rounded hover:bg-green-700"
                                >
                                    Send Email
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Event Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-8 rounded-lg w-96">
                        <h2 className="text-2xl text-green-600 mb-4">{isEdit ? 'Edit' : 'Add'} Event</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <DatePicker
                            selected={formData.date}
                            onChange={(date) => setFormData({ ...formData, date })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <textarea
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={formData.imageUrl}
                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <input
                            type="number"
                            placeholder="Max Spots"
                            value={formData.maxSpots}
                            onChange={(e) => setFormData({ ...formData, maxSpots: parseInt(e.target.value) })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <button
                            onClick={handleAddEditEvent}
                            className="bg-green-600 px-4 py-2 mr-2 rounded hover:bg-green-700"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Email Form Modal */}
            {showEmailForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-8 rounded-lg w-96">
                        <h2 className="text-2xl text-green-600 mb-4">Send Email</h2>
                        <input
                            type="text"
                            placeholder="Subject"
                            value={emailData.subject}
                            onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <textarea
                            placeholder="Message"
                            value={emailData.message}
                            onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                            className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />
                        <button
                            onClick={handleSendEmails}
                            className="bg-green-600 px-4 py-2 mr-2 rounded hover:bg-green-700"
                        >
                            Send
                        </button>
                        <button
                            onClick={() => setShowEmailForm(false)}
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsAdmin;