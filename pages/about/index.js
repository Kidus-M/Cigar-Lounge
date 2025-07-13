import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import About from "../../components/About";
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
            Welcome to the Wolf Den
          </motion.h1>

          {/* Hero Wolf Image */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-12 flex justify-center"
          >
            <div className="relative h-64 w-full max-w-4xl rounded-lg overflow-hidden">
              <Image
                  src="/aw.jpg"
                  alt="Alpha Wolf"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Wolf-Themed Mission Statement */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-lg md:text-xl">
              Wolves are fascinating creatures. A wolf does not talk about strength, loyalty, or leadership—it lives it. At{" "}
              <span className="text-green-600 font-semibold">Wolf Den Lounge</span>,
              we embody the spirit of the pack. Wolf packs are led by a dominant pair, fiercely loyal to their family, hunting together in a coordinated effort. Nothing hunts the wolf, and a den is not just a home—it’s where they protect their own. When you combine strength, loyalty, and leadership, you find what’s at the core of every wolf: family. We embrace this ethos, crafting an experience where you’re welcomed into our pack or respectfully shown the way out. Choose your path... Welcome to the Wolf Den!
            </p>
          </motion.div>

          {/* Wolf Values Section with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-white">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden">
                <Image
                    src="/alphawolf.jpg"
                    alt="Wolf Strength"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-600">Strength</h3>
              <p className="mt-2">
                Like the wolf, we stand unyielding, crafting bold cocktails and experiences that command respect.
              </p>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden">
                <Image
                    src="/wl.avif"
                    alt="Wolf Loyalty"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-600">Loyalty</h3>
              <p className="mt-2">
                Our pack is our family. We create a space where guests become kin, bonded by shared moments and exceptional drinks.
              </p>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden">
                <Image
                    src="/alphawolf.png"
                    alt="Wolf Leadership"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-600">Leadership</h3>
              <p className="mt-2">
                Guided by vision, we lead with precision, curating a lounge experience that sets the standard for excellence.
              </p>
            </motion.div>
          </div>

          {/* Wolf Image Gallery Section */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-16"
          >
            {/*<h2 className="text-3xl font-bold text-green-600 text-center mb-8">*/}
            {/*  Welcome to Our Den*/}
            {/*</h2>*/}
            <About />
          </motion.div>
        </div>
        <Footer />
      </div>
  );
};

export default AboutPage;