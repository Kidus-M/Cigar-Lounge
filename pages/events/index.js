import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
const events = [
  {
    name: "Happy Hour + Tuesdays",
    description:
      "All beers 50% off. Happy hour from Monday to Friday 4pm to 7pm. Not enough?? The first 10 people who come in on Tuesdays during happy hour will get their third beer for free!!!",
    imageUrl: "/event-happy-wednesdays.png",
  },
  {
    name: "Winey Wednesdays",
    description:
      "Putting a new spin on wine and cheese. With every glass of wine purchased comes a complimentary ayib dish decorated with mitmita, pistachios, and a side of savory crackers. Every Wednesday from 4pm to 8pm.",
    imageUrl: "/event-wine-n-ayib.png",
  },
  {
    name: "DTT (DJ Trivia Thursdays)",
    title: "DTT",
    titleDetail: "DJ Trivia Thursdays",
    description:
      "You're really in for a treat! Enjoy a Thursday night, filled with music and trivia, from 6pm to 10pm.  But that's not all. Present your college ID and get 30% off all drinks. Be the winner of our trivia night and receive a CASH prize! No cover charge for this event. But wait, there's more! If it's your college's night, show your college ID and get 50% off all drinks!",
    schedule: [
      "1st Thursday - Unity College",
      "2nd Thursday - HiLCoE College",
      "3rd Thursday - ACT College",
      "4th Thursday - St. Mary College",
    ],
    imageUrl: "/event-dtt-thursdays.png",
  },
  {
    name: "Do You Fridays",
    description:
      "Want to host an event? Wolf Den will be happy to have you. Tell us about your event and let's make it a smash! If your event reaches 50 or more people, you and one companion (girlfriend, friend, etc..) get to drink for free all night! There is no catch and there is no venue fee.",
    imageUrl: "/event-do-you-fridays.png",
  },
  {
    name: "Ladies Saturdays",
    description:
      "All drinks 50% off for all ladies! Saturday nights 8:30pm to 10:30pm.",
    imageUrl: "/event-ladies-night.png",
  },
];

const Events = () => {
  return (
    <div className="bg-black mt-20">
      <Head>
        <title>Wolf Den Lounge - Upcoming Events</title>
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
              <div className="relative aspect-[3/2] w-full md:w-1/2">
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
                  {event.title ?? event.name}
                  {event.titleDetail ? (
                    <span className="ml-2 inline-block text-[0.58em] font-medium text-green-500">
                      ({event.titleDetail})
                    </span>
                  ) : null}
                </h3>
                <p className="text-green-500 mt-2 font-bold uppercase tracking-wide">
                  Coming Soon
                </p>
                <p className="text-gray-300 mt-4">{event.description}</p>
                {event.schedule ? (
                  <ul className="mt-4 space-y-1 text-sm font-medium text-gray-300">
                    {event.schedule.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
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
