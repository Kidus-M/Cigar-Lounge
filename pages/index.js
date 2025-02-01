import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import DrinkMenu from "../components/Menu";
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
          <title>Cigar Lounge</title>
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
            Cigar Lounge
          </h1>
          <p className="text-xl md:text-3xl text-white font-light max-w-2xl mx-auto animate-fade-in-up delay-200">
            Indulge in the finest drinks, premium spirits, and an ambiance of
            timeless elegance.
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
            Explore Our Menu
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      
      {/* About Section */}
      <About />
      <DrinkMenu />
      <Footer />
    </div>
  );
}
