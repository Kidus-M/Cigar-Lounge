'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { db } from '../../lib/firebase';
import { collection, getDocs, addDoc, query, orderBy, where } from 'firebase/firestore';

const sendEmail = async (to, subject, message) => {
    const data = {
        personalizations: [{ to: [{ email: to }] }],
        from: { email: 'admin@wolfdenlounge.com' }, // Replace with verified sender
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

const Events = () => {
    const today = new Date();
    const [events, setEvents] = useState([]);
    const [registrations, setRegistrations] = useState({});
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const q = query(collection(db, 'events'), orderBy('date', 'asc'));
                const snapshot = await getDocs(q);
                const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setEvents(eventsData);

                // Load registrations for each event
                const regs = {};
                for (const event of eventsData) {
                    const regQuery = query(collection(db, 'registrations'), where('eventId', '==', event.id));
                    const regSnapshot = await getDocs(regQuery);
                    regs[event.id] = regSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                }
                setRegistrations(regs);
            } catch (error) {
                console.error('Load events error:', error);
            }
        };
        loadEvents();
    }, []);

    const handleReservation = async (eventId, e) => {
        e.preventDefault();
        const data = formData[eventId] || { name: '', email: '', phone: '' };
        if (!data.name || !data.email) {
            setError({ ...error, [eventId]: 'Name and email are required' });
            return;
        }

        try {
            const event = events.find(e => e.id === eventId);
            const eventRegs = registrations[eventId] || [];
            const registeredCount = eventRegs.filter(r => r.status === 'registered').length;
            const status = registeredCount < event.maxSpots ? 'registered' : 'waitlisted';

            const regData = {
                eventId,
                name: data.name,
                email: data.email,
                phone: data.phone,
                status,
                registeredAt: new Date().toISOString(),
            };

            await addDoc(collection(db, 'registrations'), regData);
            if (status === 'registered') {
                sendConfirmationEmail(data.email, event);
            } else {
                sendWaitlistEmail(data.email, event);
            }

            setFormData({ ...formData, [eventId]: { name: '', email: '', phone: '' } });
            setError({ ...error, [eventId]: '' });

            // Reload registrations for the event
            const regQuery = query(collection(db, 'registrations'), where('eventId', '==', eventId));
            const regSnapshot = await getDocs(regQuery);
            setRegistrations({
                ...registrations,
                [eventId]: regSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
            });
        } catch (error) {
            console.error('Reservation error:', error);
            setError({ ...error, [eventId]: 'Failed to register. Please try again.' });
        }
    };

    return (
        <div className="bg-black mt-20">
            <Head>
                <title>Wolf Den Lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="bg-black py-12">
                <h2 className="text-4xl font-bold text-center text-green-600 mb-8">Upcoming Events</h2>
                <div className="max-w-7xl mx-auto space-y-8 px-4">
                    {events.length === 0 ? (
                        <div className="text-center text-gray-300 text-xl">
                            No upcoming events at this time. Check back later for updates!
                        </div>
                    ) : (
                        events.map(event => {
                            const eventDate = new Date(event.date);
                            const isPast = eventDate < today;
                            const eventRegs = registrations[event.id] || [];
                            const registeredCount = eventRegs.filter(r => r.status === 'registered').length;
                            const waitlistedCount = eventRegs.filter(r => r.status === 'waitlisted').length;

                            return (
                                <div
                                    key={event.id}
                                    className={`flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 ${
                                        isPast ? 'opacity-50' : 'hover:scale-105'
                                    }`}
                                >
                                    <div className="relative w-full md:w-1/2 h-64">
                                        <Image
                                            src={
                                                event.imageUrl?.startsWith('http') || event.imageUrl?.startsWith('/')
                                                    ? event.imageUrl
                                                    : '/hero1.jpg'
                                            }
                                            alt={event.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="opacity-90 hover:opacity-100 transition duration-300"
                                        />
                                    </div>
                                    <div className="p-6 w-full md:w-1/2">
                                        <h3 className="text-2xl font-semibold text-green-600">{event.name}</h3>
                                        <p className="text-gray-400 mt-2">{eventDate.toDateString()}</p>
                                        <p className="text-gray-300 mt-4">{event.description}</p>
                                        {/*<p className="text-gray-300 mt-2">*/}
                                        {/*    Capacity: {registeredCount}/{event.maxSpots} filled, {waitlistedCount} waitlisted*/}
                                        {/*</p>*/}
                                        {!isPast && (
                                            <>
                                                <form onSubmit={(e) => handleReservation(event.id, e)} className="mt-6">
                                                    <h4 className="text-lg text-green-600 mb-2">Reserve Your Spot</h4>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        value={formData[event.id]?.name || ''}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                [event.id]: {
                                                                    ...(formData[event.id] || {}),
                                                                    name: e.target.value,
                                                                },
                                                            })
                                                        }
                                                        className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Email"
                                                        value={formData[event.id]?.email || ''}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                [event.id]: {
                                                                    ...(formData[event.id] || {}),
                                                                    email: e.target.value,
                                                                },
                                                            })
                                                        }
                                                        className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Phone (optional)"
                                                        value={formData[event.id]?.phone || ''}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                [event.id]: {
                                                                    ...(formData[event.id] || {}),
                                                                    phone: e.target.value,
                                                                },
                                                            })
                                                        }
                                                        className="w-full mb-2 p-2 bg-gray-700 rounded text-white"
                                                    />
                                                    {error[event.id] && (
                                                        <p className="text-red-500 mb-2">{error[event.id]}</p>
                                                    )}
                                                    <button
                                                        type="submit"
                                                        className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition duration-300"
                                                    >
                                                        Reserve
                                                    </button>
                                                </form>
                                                <Link
                                                    href="/contact"
                                                    className="inline-block mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
                                                >
                                                    Contact Us
                                                </Link>
                                            </>
                                        )}
                                        {isPast && (
                                            <p className="text-red-500 mt-4 font-bold">This event has passed</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;
