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
            About Us
          </motion.h1>

          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-center mb-6">
              Wolves are fascinating creatures. A wolf does not talk about strength, loyalty, or leadership—it lives it.
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w1.png"
                  alt="Wolf Spirit"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              Wolves live in packs (family).
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w2.png"
                  alt="Wolf Pack"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              Wolf packs are led by a dominant pair (a male and female).
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w3.png"
                  alt="Wolf Leaders"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              Wolves are extremely loyal to their family.
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w4.png"
                  alt="Wolf Loyalty"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              Wolves always hunt together in a coordinated effort.
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w5.png"
                  alt="Wolf Hunt"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              Nothing hunts the wolf.
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w6.png"
                  alt="Alpha Wolf"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>

            <p className="text-lg md:text-xl text-center mb-6">
              A den is not where a wolf lives but where they protect their own. When you add strength + loyalty + leadership, it equals what is at the core of every wolf - family. Here at our lounge we embrace the wolf. We can welcome you in, but we can also welcome you out. Choose your path.....Welcome to the Wolf Den!
            </p>
            <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-12">
              <Image
                  src="/w7.png"
                  alt="Wolf Den"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition duration-500"
              />
            </div>
          </motion.div>

          {/* About Component */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-16"
          >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-16"
            >
              <motion.div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 bg-black bg-opacity-50">
                {/* Heading */}
                <motion.h2
                    className="text-6xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                  {/*About <span className="text-green-600">Wolf Den</span>*/}
                </motion.h2>

                {/* Image Grid */}
                <motion.div
                    className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                  {/* First Image */}
                  <div className="relative">
                    <Image
                        src="/about1.jpeg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Elegant lounge interior"
                    />
                  </div>

                  {/* Second Image */}
                  <div className="relative">
                    <Image
                        src="/about2.jpeg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Premium cocktails served"
                    />
                  </div>

                  {/* Third Image */}
                  <div className="relative">
                    <Image
                        src="/about3.jpg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Luxurious seating area"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
  );
};

export default AboutPage;