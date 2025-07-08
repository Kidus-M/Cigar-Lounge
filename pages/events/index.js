import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const events = [
    {
        name: "Grand Opening Celebration",
        date: "2025-07-11",
        description: "Join us for the grand opening of our first-ever lounge dedicated to premium cigars and exquisite drinks! Enjoy exclusive cigar and cocktail pairings to celebrate this milestone. See you at 6pm.",
        imageUrl: "/hero1.jpg"
    }
];

const Events = () => {
    const today = new Date();

    // Sort events by date, with the closest upcoming event first
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="bg-black mt-20">
            <Navbar />
            <div className="bg-black py-12">
                <h2 className="text-4xl font-bold text-center text-green-600 mb-8">Upcoming Events</h2>
                <div className="max-w-7xl mx-auto space-y-8 px-4">
                    {sortedEvents.length === 0 ? (
                        <div className="text-center text-gray-300 text-xl">
                            No upcoming events at this time. Check back later for updates!
                        </div>
                    ) : (
                        sortedEvents.map((event) => {
                            const eventDate = new Date(event.date);
                            const isPast = eventDate < today;

                            return (
                                <div
                                    key={event.name}
                                    className={`flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 ${
                                        isPast ? 'opacity-50' : 'hover:scale-105'
                                    }`}
                                >
                                    <div className="relative w-full md:w-1/2 h-64">
                                        <Image
                                            src={event.imageUrl}
                                            alt={event.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="opacity-90 hover:opacity-100 transition duration-300"
                                        />
                                    </div>
                                    <div className="p-6 w-full md:w-1/2">
                                        <h3 className="text-2xl font-semibold text-green-600">{event.name}</h3>
                                        <p className="text-gray-400 mt-2">{eventDate.toDateString()}</p>
                                        <p className="text-gray-300 mt-4">{event.description}</p>
                                        {!isPast && (
                                            <Link href="/contact" className="inline-block mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
                                                Contact Us
                                            </Link>
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