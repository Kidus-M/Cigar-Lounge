"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Elegant lounge interior"
          className="opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 bg-black bg-opacity-50">
        {/* Heading */}
        <motion.h2
          className="text-6xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="text-orange-600">Cigar Lounge</span>
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
              src="/about1.jpg"
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
              src="/about2.jpg"
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

        {/* Text Below Images */}
        <motion.div
          className="mt-10 text-center max-w-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">
            <span className="text-orange-600 font-semibold">Cigar</span> is more than just a bar. It is a sanctuary for those who seek
            <span className="text-orange-600 font-semibold"> refinement and relaxation</span>. Whether for an intimate gathering or a solo escape,
            our lounge offers a perfect retreat.
          </p>
          <p className="text-xl mt-2">
            Our expert mixologists craft exquisite cocktails using premium ingredients, offering a unique tasting experience that
            sets us apart as the best lounge in Addis Ababa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
