"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about1.jpeg"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
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
          About <span className="text-green-600">Wolf Den</span>
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
              className="rounded-lg shadow-lg object-cover"
              alt="Elegant lounge interior"
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <Image
              src="/about2.jpeg"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
              alt="Elegant lounge details"
            />
          </div>

          {/* Third Image */}
          <div className="relative">
            <Image
              src="/about3.jpg"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
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
          <p className="text-xl">At
            <span className=""> Wolf Den </span>we are excited to introduce the first premiere cigar lounge in Ethiopia. We strive to create a hidden upscale environment where our clients can escape into seclusion. Come join us and allow us to provide you with a tranquil atmosphere, fine service, and a distinguished cigar collection. Welcome to the Wolf Den!

          </p>

        </motion.div>
      </div>
    </section>
  );
}
