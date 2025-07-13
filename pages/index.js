import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import DrinkMenu from "../components/DrinkMenu";
import Countdown from "../components/Countdown";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { FaGlobe, FaUsers, FaGlassMartiniAlt } from 'react-icons/fa';

export default function HeroSection() {
  const heroRef = useRef(null);
  const route = useRouter();

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add("opacity-100");
    }
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className="relative h-screen bg-black flex items-center justify-center overflow-hidden opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <Navbar />

        <Head>
          <title>Wolf Den Lounge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-serif text-white font-bold tracking-wider animate-fade-in">
            Wolf Den Lounge
          </h1>
          <p className="text-xl md:text-3xl text-white font-light max-w-2xl mx-auto animate-fade-in-up delay-200">
            Indulge in the finest drinks, premium spirits, and an ambiance of
            timeless elegance.
          </p>
          <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
          onClick={() => {route.push('/menu')}}>
            Explore Our Menu
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>
        {/*<Countdown />*/}
      
      {/* About Section */}
      
      <About />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-white">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
          >
            <FaGlobe size={50} className="text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-green-600">
              Global Standards
            </h3>
            <p className="mt-2">
              We source the finest drinks from around the world,
              ensuring a luxurious experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
          >
            <FaUsers size={50} className="text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-green-600">
              Community
            </h3>
            <p className="mt-2">
              A space designed for conversation, networking, and shared
              appreciation of fine beavrages.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
          >
            <FaGlassMartiniAlt size={50} className="text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-green-600">
              Exquisite Drinks
            </h3>
            <p className="mt-2">
              From rare whiskeys to signature cocktails, we craft drinks that
              elevate your experience.
            </p>
          </motion.div>
        </div>
      <DrinkMenu />
      <Footer />
    </div>
  );
}
