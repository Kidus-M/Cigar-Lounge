import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// IMPORTING THE IMAGE:
// This assumes your folder structure is:
// root/
//   ├── components/
//   │     └── Hero.js
//   └── assets/
//         └── landing/
//               └── hero.jpg
import heroBg from '../assets/landing/hero.jpg';

export default function Hero() {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);

    // Trigger entry animations on mount
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleNavigation = (path) => {
        if (router) {
            router.push(path);
        }
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]">

            {/* --- Background Layer --- */}
            <div className="absolute inset-0 z-0">
                {/* Using the imported object 'heroBg'.
           Note: Depending on your Next.js config, heroBg might be the string path
           or an object with a .src property. We handle both below.
        */}
                <img
                    src={heroBg.src || heroBg}
                    alt="Wolf Den Lounge Atmosphere"
                    className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${
                        isLoaded ? "scale-105" : "scale-100"
                    }`}
                />

                {/* Dark Gradient Overlay: Essential for text readability against the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-black/80" />

                {/* Optional: Subtle Texture Overlay for Film Grain effect */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 mt-12">

                {/* 1. Brand Signifier */}
                <div
                    className={`transition-all duration-1000 ease-out transform ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
          <span className="text-[#A68A64] uppercase tracking-[0.35em] text-xs md:text-sm font-semibold border-b border-[#A68A64]/30 pb-2">
            Est. 2024 • Addis Ababa
          </span>
                </div>

                {/* 2. Hero Headline */}
                <h1
                    className={`text-5xl md:text-7xl lg:text-8xl text-[#F3F4F6] font-serif leading-[1.05] tracking-tight drop-shadow-2xl transition-all duration-1000 delay-200 ease-out transform ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    Timeless <span className="italic text-[#A68A64] font-light">Elegance</span>,<br />
                    Modern <span className="italic text-white/80 font-light">Spirit</span>
                </h1>

                {/* 3. Subheadline */}
                <p
                    className={`text-lg md:text-xl text-gray-300 font-sans font-light max-w-xl leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    A sanctuary for the sophisticated palate. Indulge in rare cigars and curated spirits in an atmosphere of unhurried luxury.
                </p>

                {/* 4. Call to Action Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-6 mt-6 transition-all duration-1000 delay-500 ease-out transform ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <button
                        onClick={() => handleNavigation('/menu')}
                        className="group relative px-10 py-4 bg-[#A68A64] overflow-hidden transition-all duration-300 hover:bg-[#C4AA88] shadow-lg shadow-[#A68A64]/20"
                    >
            <span className="relative z-10 text-[#121212] text-xs uppercase tracking-[0.2em] font-bold">
              Explore Menu
            </span>
                    </button>

                    <button
                        onClick={() => handleNavigation('/contact')}
                        className="group px-10 py-4 bg-transparent border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Reserve A Seat
                    </button>
                </div>
            </div>

            {/* --- Scroll Indicator --- */}
            {/*<div*/}
            {/*    className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-700 ${*/}
            {/*        isLoaded ? "opacity-60" : "opacity-0"*/}
            {/*    }`}*/}
            {/*>*/}
            {/*    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Scroll</span>*/}
            {/*    <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#A68A64] to-transparent animate-pulse" />*/}
            {/*</div>*/}

        </section>
    );
}