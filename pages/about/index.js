import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

const specialties = [
  {
    title: "Whiskey with Character",
    description:
      "Our whiskey selection is focused, approachable, and chosen for the moments that deserve to be savored. Every bottle earns its place.",
    imageUrl: "/old-fashioned.jpeg",
  },
  {
    title: "Cigars Worth Slowing Down For",
    description:
      "We celebrate the quiet ritual of a fine cigar: time to settle in, enjoy the craft, and let conversation unfold naturally.",
    imageUrl: "/event-smokie-saturdays.png",
  },
  {
    title: "Events with a Pulse",
    description:
      "From live music to weekly celebrations, our events turn familiar nights into occasions the whole pack can share.",
    imageUrl: "/event-music-night.png",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-black mt-20">
      <Head>
        <title>Wolf Den Lounge - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-black text-gray-300">
        <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center px-6 py-20">
          <Image
            src="/about1.jpeg"
            alt="Warm and elegant Wolf Den lounge interior"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <p className="text-green-600 font-bold uppercase tracking-[0.3em] mb-5">
              About Wolf Den
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Where Good Taste Feels Like Home
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Wolf Den is an intimate Addis Ababa lounge built around three
              things we care about deeply: characterful whiskey, exceptional
              cigars, and events that bring people together.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-600">
              Our Specialties
            </h2>
            <p className="mt-5 text-lg text-gray-300">
              A thoughtful lounge experience, centered on the things we do
              best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.article
                key={specialty.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="opacity-90 hover:opacity-100 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-green-600">
                    {specialty.title}
                  </h3>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg border border-green-600 p-8 md:p-12 text-center"
          >
            <p className="text-green-600 font-bold uppercase tracking-[0.25em]">
              Simple by Design
            </p>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">
              Less searching. More enjoying.
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We do not believe a longer list automatically makes a better
              experience. Our selections are intentionally simple, carefully
              considered, and easy to enjoy. Quality leads; clutter stays out.
            </p>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <div className="relative h-80 md:h-[430px] rounded-lg overflow-hidden">
              <Image
                src="/about3.jpg"
                alt="Cozy seating inside Wolf Den Lounge"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="opacity-90"
              />
            </div>
            <div>
              <p className="text-green-600 font-bold uppercase tracking-[0.25em]">
                Your Home Away from Home
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
                Come in. Settle down. Stay awhile.
              </h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed">
                The Den is polished without feeling distant. Warm lighting,
                comfortable corners, familiar faces, and genuine hospitality
                create the kind of coziness that makes a first visit feel like
                a return home.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="bg-gray-900 py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-green-600 font-bold uppercase tracking-[0.25em]">
                Women Behind the Den
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
                Hospitality led by women
              </h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed">
                Wolf Den is proudly powered by an all-female team. Women lead
                our hospitality, operations, events, and creative direction,
                bringing care, confidence, and fresh perspective to every part
                of the lounge.
              </p>
              <p className="mt-5 text-lg md:text-xl leading-relaxed">
                Supporting Wolf Den means supporting women&apos;s
                entrepreneurship, professional growth, and leadership. It is
                not simply something we say; it is part of how we work every
                day.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
