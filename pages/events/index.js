import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

const events = [
  {
    name: "Music Night",
    description:
      "An intimate evening of live music, warm energy, and the signature Wolf Den atmosphere.",
    imageUrl: "/event-music-night.png",
  },
  {
    name: "Ladies Thursday",
    description:
      "All drinks 50% off for all ladies. Thursday nights! 8:30pm to 10:30pm.",
    imageUrl: "/event-ladies-night.png",
  },
  {
    name: "Birthday Celebration",
    description:
      "Celebrate your special day with the pack in an elegant setting made for unforgettable occasions.",
    imageUrl: "/event-birthday-celebration.png",
  },
];

const Events = () => {
  return (
    <div className="bg-black mt-20">
      <Head>
        <title>Wolf Den Lounge - Upcoming Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-black py-12">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
          Upcoming Events
        </h2>
        <div className="max-w-7xl mx-auto space-y-8 px-4">
          {events.map((event) => (
            <div
              key={event.name}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="relative w-full md:w-1/2 h-64">
                <Image
                  src={event.imageUrl}
                  alt={event.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>
              <div className="p-6 w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-green-600">
                  {event.name}
                </h3>
                <p className="text-green-500 mt-2 font-bold uppercase tracking-wide">
                  Coming Soon
                </p>
                <p className="text-gray-300 mt-4">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
