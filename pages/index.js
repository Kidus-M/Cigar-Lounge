import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function HeroSection() {
  const heroRef = useRef(null);

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
            Wolf Den 
          </h1>
          <h2 className="text-2xl md:text-4xl text-white font-light tracking-wide animate-fade-in delay-100">
            CIGAR LOUNGE
          </h2>
          <p className="text-xl md:text-3xl text-white font-light max-w-2xl mx-auto animate-fade-in-up delay-200">
            Discover a hidden, upscale retreat, where timeless elegance and
            genuine hospitality come together.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      <About />
      <Footer />
    </div>
  );
}
