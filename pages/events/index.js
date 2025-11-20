import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

// --- MOCK DATA (Simulating Firestore) ---
const MOCK_EVENTS = [
    {
        id: '1',
        name: 'Whiskey & Smoke Night',
        date: '2025-12-15T19:00:00',
        description: 'An exclusive tasting of rare single malts paired with our signature house blend cigars. Hosted by our master sommelier.',
        image: 'https://images.unsplash.com/photo-1525538465038-f02733205657?q=80&w=2574&auto=format&fit=crop',
        maxSpots: 20,
        registeredCount: 12,
        status: 'open'
    },
    {
        id: '2',
        name: 'Midnight Jazz & Gin',
        date: '2025-04-22T20:00:00',
        description: 'Live jazz performance accompanied by a curated selection of botanical gins. A night of rhythm and relaxation.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
        maxSpots: 15,
        registeredCount: 15, // Full -> Waitlist
        status: 'open'
    },
    {
        id: '3',
        name: 'The Alpha Gathering',
        date: '2024-12-10T18:00:00', // Past Event
        description: 'Our annual members-only networking event. Strictly by invitation or reservation.',
        image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2536&auto=format&fit=crop',
        maxSpots: 30,
        registeredCount: 30,
        status: 'past'
    }
];

// --- COMPONENTS ---

const EventCard = ({ event }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', phone: '' });
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'waitlisted' | 'error'

    const eventDate = new Date(event.date);
    const isPast = new Date() > eventDate;
    const isFull = event.registeredCount >= event.maxSpots;
    const displayStatus = isPast ? 'Past Event' : isFull ? 'Waitlist Only' : 'Open';

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call / Firebase Logic
        setTimeout(() => {
            if (isFull) {
                setSubmissionStatus('waitlisted');
            } else {
                setSubmissionStatus('success');
            }
            setFormState({ name: '', email: '', phone: '' });
        }, 1000);
    };

    return (
        <div className={`group relative w-full border border-white/5 bg-[#1A1A1A] overflow-hidden transition-all duration-500 ${isPast ? 'opacity-60 grayscale' : 'hover:border-[#A68A64]/30'}`}>

            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 text-center">
                        <span className="block text-xs text-[#A68A64] uppercase tracking-widest">{eventDate.toLocaleString('default', { month: 'short' })}</span>
                        <span className="block text-2xl font-serif text-white">{eventDate.getDate()}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between relative">
                    {/* Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#A68A64]/50 to-transparent md:hidden" />
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#A68A64]/50 to-transparent hidden md:block" />

                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-white group-hover:text-[#A68A64] transition-colors">
                                {event.name}
                            </h3>
                            <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${
                                isPast ? 'border-red-900 text-red-500' :
                                    isFull ? 'border-yellow-900 text-yellow-500' :
                                        'border-green-900 text-green-500'
                            }`}>
                                {displayStatus}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#A68A64]" />
                                {eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#A68A64]" />
                                {isFull ? 'Full Capacity' : `${event.maxSpots - event.registeredCount} spots left`}
                            </div>
                        </div>

                        <p className="text-gray-400 font-light leading-relaxed mb-6">
                            {event.description}
                        </p>
                    </div>

                    {/* Action Area */}
                    {!isPast && !submissionStatus && (
                        <div>
                            {!isExpanded ? (
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="px-8 py-3 bg-transparent border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#A68A64] hover:border-[#A68A64] hover:text-black transition-all duration-300"
                                >
                                    {isFull ? 'Join Waitlist' : 'Reserve Spot'}
                                </button>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-black/50 p-6 border border-white/10 animate-fade-up">
                                    <h4 className="text-[#A68A64] text-xs uppercase tracking-widest mb-4">
                                        {isFull ? 'Join the Waitlist' : 'Confirm Reservation'}
                                    </h4>

                                    <div className="space-y-4">
                                        <div className="group">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                required
                                                value={formState.name}
                                                onChange={e => setFormState({...formState, name: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-gray-600"
                                            />
                                        </div>
                                        <div className="group">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                                value={formState.email}
                                                onChange={e => setFormState({...formState, email: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-gray-600"
                                            />
                                        </div>
                                        <div className="group">
                                            <input
                                                type="tel"
                                                placeholder="Phone (Optional)"
                                                value={formState.phone}
                                                onChange={e => setFormState({...formState, phone: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button
                                            type="submit"
                                            className="flex-1 py-3 bg-[#A68A64] text-black text-xs uppercase font-bold tracking-widest hover:bg-white transition-colors"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsExpanded(false)}
                                            className="px-4 py-3 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}

                    {/* Success / Waitlist Message */}
                    {submissionStatus && (
                        <div className="mt-4 p-4 bg-green-900/20 border border-green-900/50 flex items-start gap-3 animate-fade-up">
                            <CheckCircle className="w-5 h-5 text-[#A68A64] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-medium text-sm">
                                    {submissionStatus === 'waitlisted' ? 'Added to Waitlist' : 'Reservation Confirmed'}
                                </h4>
                                <p className="text-gray-400 text-xs mt-1">
                                    {submissionStatus === 'waitlisted'
                                        ? "We'll notify you immediately if a spot opens up."
                                        : "Check your email for your ticket details."}
                                </p>
                                <button
                                    onClick={() => { setSubmissionStatus(null); setIsExpanded(false); }}
                                    className="text-[#A68A64] text-xs mt-3 hover:underline"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {isPast && (
                        <div className="mt-6 flex items-center gap-2 text-gray-500">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-widest">Registration Closed</span>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default function EventsPage() {
    const [events, setEvents] = useState(MOCK_EVENTS);

    // Effect hook can be used here to load real data from Firebase in production
    useEffect(() => {
        // loadEventsFromFirestore();
    }, []);

    return (
        <div className="bg-[#121212] min-h-screen text-[#F3F4F6] font-sans selection:bg-[#A68A64] selection:text-black">

            {/* --- HEADER --- */}
            <div className="relative pt-32 pb-20 px-6 text-center">
                <span className="text-[#A68A64] uppercase tracking-[0.3em] text-xs font-bold animate-fade-up">
                    The Calendar
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mt-4 mb-6 animate-fade-up delay-100">
                    Exclusive <span className="italic text-[#A68A64]">Gatherings</span>
                </h1>
                <p className="text-gray-400 font-light max-w-xl mx-auto animate-fade-up delay-200 leading-relaxed">
                    From whiskey tastings to private member nights, join us for curated experiences designed for the sophisticated palate.
                </p>
            </div>

            {/* --- EVENTS GRID --- */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-32 space-y-12">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div
                            key={event.id}
                            className="animate-fade-up"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                        >
                            <EventCard event={event} />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 border border-white/5 bg-[#1A1A1A]">
                        <p className="text-xl font-serif text-gray-500">No upcoming events scheduled.</p>
                        <p className="text-sm text-[#A68A64] mt-2 uppercase tracking-widest">Check back soon</p>
                    </div>
                )}
            </div>

        </div>
    );
}