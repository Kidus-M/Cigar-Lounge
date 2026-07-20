import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
const events = [
  {
    name: "Ladies Thursdays",
    description:
      "All drinks 50% off for all ladies! Thursday nights 8:30pm to 10:30pm.",
    imageUrl: "/event-ladies-night.png",
  },
  {
    name: "Jazzie Fridays",
    description:
      "Live band Friday nights from 6pm to 10pm.",
    imageUrl: "/event-music-night.png",
  },
  {
    name: "Smokie Saturdays",
    description:
      "Purchase a cigar anytime you like. But when you purchase a cigar on Saturdays, you get one glass of whiskey free!!!",
    imageUrl: "/event-smokie-saturdays.png",
  },
  {
    name: "Birthday Celebration",
    description:
      "Show ID and bring at least three other people with you, and our birthday boy or birthday girl will get 3 free drinks!!!",
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
        <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-green-600 text-center mb-24"
                >
                    Events
                </motion.h1>
        
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
