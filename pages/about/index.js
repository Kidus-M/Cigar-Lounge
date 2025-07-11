import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaGlobe, FaUsers, FaGlassMartiniAlt } from 'react-icons/fa';
import Gallery from "../../components/Gallery";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="bg-black mt-20">
      <Head>
        <title>Wolf Den Lounge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
      <div className="bg-black min-h-screen text-gray-300 py-12 px-6 md:px-12 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-green-600 text-center mb-8"
        >
          About Us
        </motion.h1>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl">
            At{" "}
            <span className="text-green-600 font-semibold">Wolf Den Lounge</span>,
            we provide an oasis of relaxation, elegance, and the finest drinks.
            Our mission is to create a welcoming environment where guests can
            unwind and indulge in handcrafted cocktails, drinks, and
            world-class service.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-white">
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

        {/* Image Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <Image
            src="/hero1.jpg"
            alt="Wolf Den Lounge Interior"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div> */}
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
