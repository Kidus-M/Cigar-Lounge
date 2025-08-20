// pages/admin/events.jsx
'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, getDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';

// ================== EMAIL HELPERS ==================
const sendEmail = async (to, subject, message) => {
    const data = {
        personalizations: [{ to: [{ email: to }] }],
        from: { email: 'admin@wolfdenlounge.com' },
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

// ================== COMPONENT ==================
const EventsAdmin = () => {
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

    // --- Auth listener ---
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

    // --- Load Events ---
    const loadEvents = async () => {
        const q = query(collection(db, 'events'), orderBy('date', 'asc'));
        const snapshot = await getDocs(q);
        const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
    };

    // --- Load Registrations ---
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

    // --- Add / Edit Event ---
    const handleAddEditEvent = async () => {
        const eventData = {
            name: formData.name,
            date: formData.date instanceof Date ? formData.date.toISOString() : new Date(formData.date).toISOString(),
            description: formData.description,
            imageUrl: formData.imageUrl,
            maxSpots: Number(formData.maxSpots),
            createdAt: new Date().toISOString(),
        };

        try {
            if (isEdit && selectedEvent) {
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

    // --- Delete Event ---
    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteDoc(doc(db, 'events', eventId));
            loadEvents();
            setSelectedEvent(null);
        } catch (error) {
            console.error('Event delete error:', error);
        }
    };

    // --- Auth ---
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    const handleLogout = async () => signOut(auth);

    // ================== RENDER ==================
    if (!user) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl text-green-600 mb-4 font-bold">Admin Login</h2>
                    <input type="email" placeholder="Email"
                           className="w-full mb-3 p-2 bg-gray-700 text-white rounded"
                           value={loginData.email}
                           onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <input type="password" placeholder="Password"
                           className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
                           value={loginData.password}
                           onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <button onClick={handleLogin}
                            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Login
                    </button>
                </div>
            </div>
        );
    }

    const registeredCount = registrations.filter(r => r.status === 'registered').length;
    const waitlistedCount = registrations.filter(r => r.status === 'waitlisted').length;

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Navbar */}
            <nav className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl text-green-600 font-bold">Admin Dashboard</h1>
                <button onClick={handleLogout} className="text-green-600 hover:text-green-500">Logout</button>
            </nav>

            <div className="flex flex-col md:flex-row p-4 gap-6">
                {/* Event List Sidebar */}
                <div className="md:w-1/3 space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-green-600">Events</h2>
                        <button
                            onClick={() => { setShowForm(true); setIsEdit(false); }}
                            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-sm"
                        >+ Add</button>
                    </div>

                    <div className="space-y-3">
                        {events.map(event => (
                            <div key={event.id}
                                 onClick={() => handleSelectEvent(event)}
                                 className={`p-4 rounded-lg cursor-pointer border ${selectedEvent?.id === event.id ? 'border-green-600' : 'border-gray-700'} bg-gray-800 hover:bg-gray-700`}>
                                <h3 className="text-green-500 font-medium">{event.name}</h3>
                                <p className="text-sm text-gray-400">{new Date(event.date).toDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event Details */}
                <div className="md:w-2/3 bg-gray-900 p-6 rounded-lg shadow-lg">
                    {selectedEvent ? (
                        <>
                            <h2 className="text-2xl font-semibold text-green-600 mb-2">{selectedEvent.name}</h2>
                            <p className="text-gray-300">Date: {new Date(selectedEvent.date).toDateString()}</p>
                            <p className="text-gray-300">Capacity: {registeredCount}/{selectedEvent.maxSpots} filled ({waitlistedCount} waitlisted)</p>

                            {/* Registrations Table */}
                            <div className="overflow-y-auto max-h-96 mt-4 border border-gray-700 rounded-lg">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-800 text-gray-300">
                                    <tr>
                                        <th className="p-2">Name</th>
                                        <th className="p-2">Email</th>
                                        <th className="p-2">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {registrations.map(r => (
                                        <tr key={r.id} className="border-t border-gray-700">
                                            <td className="p-2">{r.name}</td>
                                            <td className="p-2">{r.email}</td>
                                            <td className={`p-2 ${r.status === 'waitlisted' ? 'text-yellow-400' : 'text-green-400'}`}>{r.status}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-400">Select an event to view details.</p>
                    )}
                </div>
            </div>

            {/* Event Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-lg">
                        <h2 className="text-xl font-semibold text-green-600 mb-4">{isEdit ? 'Edit Event' : 'Add Event'}</h2>
                        <input type="text" placeholder="Event Name" value={formData.name}
                               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                               className="w-full mb-3 p-2 bg-gray-700 rounded text-white"
                        />
                        <DatePicker
                            selected={formData.date}
                            onChange={(date) => setFormData({ ...formData, date })}
                            className="w-full mb-3 p-2 bg-gray-700 rounded text-white"
                        />
                        <textarea placeholder="Description" value={formData.description}
                                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                  className="w-full mb-3 p-2 bg-gray-700 rounded text-white"
                        />
                        <input type="text" placeholder="Image URL" value={formData.imageUrl}
                               onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                               className="w-full mb-3 p-2 bg-gray-700 rounded text-white"
                        />
                        <input type="number" placeholder="Max Spots" value={formData.maxSpots}
                               onChange={(e) => setFormData({ ...formData, maxSpots: e.target.value })}
                               className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
                        />

                        <div className="flex justify-end gap-3">
                            <button onClick={handleAddEditEvent}
                                    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Save</button>
                            <button onClick={() => setShowForm(false)}
                                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsAdmin;
