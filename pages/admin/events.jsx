// pages/admin/events.jsx
'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';

const EventsAdmin = () => {
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [registrations, setRegistrations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', date: new Date(), time: '', description: '', maxSpots: 0 });
    const [isEdit, setIsEdit] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });

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
        setRegistrations(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        loadRegistrations(event.id);
    };

    const handleAddEditEvent = async () => {
        const eventData = {
            name: formData.name,
            date: formData.date instanceof Date ? formData.date.toISOString() : new Date(formData.date).toISOString(),
            time: formData.time,
            description: formData.description,
            imageUrl: `/images/${formData.name.toLowerCase().replace(/\s+/g, '_')}.jpg`, // auto-generate from name
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
            setFormData({ name: '', date: new Date(), time: '', description: '', maxSpots: 0 });
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

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    const handleLogout = async () => signOut(auth);

    if (!user) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-96">
                    <h2 className="text-2xl text-green-600 mb-4 font-bold text-center">Admin Login</h2>
                    <input type="email" placeholder="Email"
                           className="w-full mb-3 p-3 bg-gray-700 text-white rounded-lg"
                           value={loginData.email}
                           onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <input type="password" placeholder="Password"
                           className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg"
                           value={loginData.password}
                           onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <button onClick={handleLogin}
                            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
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
            <nav className="bg-gray-900 p-4 flex justify-between items-center shadow-lg">
                <h1 className="text-2xl text-green-600 font-bold">Admin Dashboard</h1>
                <button onClick={handleLogout}
                        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 font-medium">
                    Logout
                </button>
            </nav>

            <div className="flex flex-col md:flex-row p-6 gap-6">
                {/* Sidebar */}
                <div className="md:w-1/3 space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-green-600">Events</h2>
                        <button
                            onClick={() => { setShowForm(true); setIsEdit(false); }}
                            className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700 text-sm font-medium"
                        >+ Add</button>
                    </div>

                    <div className="space-y-3">
                        {events.map(event => (
                            <div key={event.id}
                                 onClick={() => handleSelectEvent(event)}
                                 className={`p-4 rounded-lg cursor-pointer border transition 
                              ${selectedEvent?.id === event.id ? 'border-green-600 bg-gray-700' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}>
                                <h3 className="text-green-500 font-medium">{event.name}</h3>
                                <p className="text-sm text-gray-400">{new Date(event.date).toDateString()} • {event.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event Details */}
                <div className="md:w-2/3 bg-gray-900 p-6 rounded-xl shadow-xl">
                    {selectedEvent ? (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold text-green-600">{selectedEvent.name}</h2>
                                <div className="space-x-2">
                                    <button onClick={() => {
                                        setShowForm(true);
                                        setIsEdit(true);
                                        setFormData(selectedEvent);
                                    }}
                                            className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600 font-medium">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteEvent(selectedEvent.id)}
                                            className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 font-medium">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-2">Date: {new Date(selectedEvent.date).toDateString()} • {selectedEvent.time}</p>
                            <p className="text-gray-300 mb-2">Capacity: {registeredCount}/{selectedEvent.maxSpots} filled ({waitlistedCount} waitlisted)</p>
                            <p className="text-gray-400 mb-4">{selectedEvent.description}</p>

                            {/* Registrations */}
                            <div className="overflow-y-auto max-h-96 border border-gray-700 rounded-lg">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-800 text-gray-300 sticky top-0">
                                    <tr>
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Email</th>
                                        <th className="p-2 text-left">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {registrations.map((r, idx) => (
                                        <tr key={r.id} className={idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
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

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
                        <h2 className="text-xl font-semibold text-green-600 mb-4">{isEdit ? 'Edit Event' : 'Add Event'}</h2>
                        <input type="text" placeholder="Event Name" value={formData.name}
                               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                               className="w-full mb-3 p-3 bg-gray-700 rounded-lg text-white"
                        />
                        <DatePicker
                            selected={formData.date ? new Date(formData.date) : new Date()}
                            onChange={(date) => setFormData({ ...formData, date })}
                            className="w-full mb-3 p-3 bg-gray-700 rounded-lg text-white"
                        />
                        <input type="time" value={formData.time}
                               onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                               className="w-full mb-3 p-3 bg-gray-700 rounded-lg text-white"
                        />
                        <textarea placeholder="Description" value={formData.description}
                                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                  className="w-full mb-3 p-3 bg-gray-700 rounded-lg text-white"
                        />
                        <input type="number" placeholder="Max Spots" value={formData.maxSpots}
                               onChange={(e) => setFormData({ ...formData, maxSpots: e.target.value })}
                               className="w-full mb-4 p-3 bg-gray-700 rounded-lg text-white"
                        />

                        <div className="flex justify-end gap-3">
                            <button onClick={handleAddEditEvent}
                                    className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 font-medium">Save</button>
                            <button onClick={() => setShowForm(false)}
                                    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 font-medium">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsAdmin;
