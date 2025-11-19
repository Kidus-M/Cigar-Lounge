"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPreview() {
  // --- REFS ---
  // 1. Text Section Refs
  const textScrollTrackRef = useRef(null);

  // 2. Gallery Section Refs
  const galleryScrollTrackRef = useRef(null); // The "Jail" for gallery
  const galleryTrackRef = useRef(null);       // The actual moving row of images

  // --- DATA ---
  const rawText = [
    "At Wolf Den, we are excited to introduce the first premiere cigar lounge in Ethiopia.",
    "We strive to create a hidden upscale environment where our clients can escape into seclusion.",
    "Come join us and allow us to provide you with a tranquil atmosphere, fine service, and premier drinks complemented by our world-class cigar collection.",
    "Welcome to the Wolf Den!"
  ].join("\n\n");

  const images = [
    { src: "https://images.unsplash.com/photo-1596708304910-410a0e5b8e97?q=80&w=1800&auto=format&fit=crop", alt: "Lounge Seating", title: "Main Lounge", category: "Seating", w: 450, h: 350 },
    { src: "https://images.unsplash.com/photo-1594917452661-8e0f59ef278a?q=80&w=1500&auto=format&fit=crop", alt: "Bar Cocktails", title: "Signature Pours", category: "Bar Service", w: 300, h: 450 },
    { src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1800&auto=format&fit=crop", alt: "Luxurious Seating", title: "The Velvet Room", category: "Private", w: 500, h: 380 },
    { src: "https://images.unsplash.com/photo-1627883204901-4470876798e8?q=80&w=1500&auto=format&fit=crop", alt: "Cigar and Ashtray", title: "Aficionado's Choice", category: "Collection", w: 280, h: 320 },
    { src: "https://images.unsplash.com/photo-1601618210137-0201083437e6?q=80&w=1500&auto=format&fit=crop", alt: "Whiskey and Glass", title: "Rare Malts", category: "Drinks", w: 380, h: 450 },
    { src: "https://images.unsplash.com/photo-1587391807080-b26a117094b8?q=80&w=1800&auto=format&fit=crop", alt: "Ambient Lighting", title: "Evening Mood", category: "Ambience", w: 340, h: 340 },
    { src: "https://images.unsplash.com/photo-1532634726-8b9fb99825c7?q=80&w=1500&auto=format&fit=crop", alt: "Rich Interior", title: "Interior Detail", category: "Design", w: 480, h: 380 },
  ];

  // --- TEXT SCROLL LOGIC ---
  const chars = Array.from(rawText);
  const totalChars = chars.length;

  const { scrollYProgress: textProgress } = useScroll({
    target: textScrollTrackRef,
    offset: ["start start", "end end"],
  });

  const [revealedChars, setRevealedChars] = useState(0);

  useEffect(() => {
    const unsub = textProgress.on("change", (v) => {
      const clamped = Math.max(0, Math.min(1, v));
      const count = Math.floor(clamped * totalChars);
      setRevealedChars(count);
    });
    return () => unsub();
  }, [textProgress, totalChars]);


  // --- GALLERY SCROLL LOGIC ---

  // 1. Track the "Jail" container (galleryScrollTrackRef)
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryScrollTrackRef,
    offset: ["start start", "end end"], // Stick while this container is in view
  });

  const [maxTranslate, setMaxTranslate] = useState(0);

  // 2. Calculate how far to slide left
  useEffect(() => {
    const calcResize = () => {
      if (galleryTrackRef.current) {
        const trackW = galleryTrackRef.current.scrollWidth;
        const viewW = window.innerWidth;
        // We subtract viewW so we stop exactly when the last image enters
        // Added padding +100 for safety
        setMaxTranslate(trackW - viewW + 100);
      }
    };
    calcResize();
    window.addEventListener("resize", calcResize);
    return () => window.removeEventListener("resize", calcResize);
  }, []);

  // 3. Transform vertical scroll (0-1) to horizontal movement (0 to -maxTranslate)
  const translateX = useTransform(galleryProgress, [0, 1], [0, -maxTranslate]);


  // --- RENDER HELPERS ---
  const renderText = () => {
    const parts = rawText.match(/(\s+|\S+)/g) || [];
    let charIndex = 0;

    return parts.map((part, pIdx) => {
      const partChars = Array.from(part);
      const isSpace = /^\s+$/.test(part);
      return (
          <span key={pIdx} className="inline-block" style={{ whiteSpace: isSpace ? "pre" : "nowrap" }}>
          {partChars.map((c, cIdx) => {
            const currentGlobalIndex = charIndex + cIdx;
            const isVisible = currentGlobalIndex < revealedChars;
            return (
                <motion.span
                    key={currentGlobalIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {c}
                </motion.span>
            );
          })}
            <span className="hidden">{(charIndex += partChars.length)}</span>
        </span>
      );
    });
  };

  return (
      <div className="bg-[#121212]">

        {/* =========================================
          SECTION 1: TEXT REVEAL
          Sticky for 350vh
      ========================================= */}
        <section ref={textScrollTrackRef} className="relative h-[350vh]">
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            <div className="relative z-10 max-w-5xl px-6 text-center">
              <div className="mb-12">
                <span className="text-[#A68A64] uppercase tracking-[0.25em] text-xs md:text-sm font-bold mb-4 block">
                  Our Philosophy
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-white">
                  The <span className="text-[#A68A64] italic font-light">Wolf Den</span> Story
                </h2>
              </div>
              <div className="min-h-[300px] flex items-start justify-center">
                <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200 max-w-4xl text-center">
                  {renderText()}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================
          SECTION 2: GALLERY
          Sticky for 400vh (Adjust height to control scroll speed)
      ========================================= */}
        <section ref={galleryScrollTrackRef} className="relative h-[400vh] bg-[#0e0e0e]">

          {/* The Sticky Viewport: Keeps gallery centered while user scrolls down */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

            {/* --- GALLERY CONTENT --- */}
            <div className="relative z-20 w-full">

              {/* Header */}
              <div className="max-w-[90%] mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
                <div>
                <span className="text-[#A68A64] font-mono text-xs tracking-widest uppercase mb-2 block">
                  Inside the Den
                </span>
                  <h3 className="text-white text-4xl md:text-5xl font-serif tracking-tight">
                    The Atmosphere
                  </h3>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <p className="text-white/40 text-sm font-mono max-w-xs ml-auto">
                    Scroll to explore our curated spaces, designed for privacy and comfort.
                  </p>
                </div>
              </div>

              {/* Horizontal Moving Track */}
              <div className="w-full">
                <motion.div
                    ref={galleryTrackRef}
                    style={{ x: translateX }}
                    className="flex gap-8 md:gap-12 w-max px-[5%]"
                >
                  {images.map((img, i) => (
                      <div
                          key={i}
                          className="relative group flex-shrink-0 select-none"
                          style={{ width: img.w, height: img.h }}
                      >
                        <div className="w-full h-full overflow-hidden relative bg-[#1a1a1a]">
                          <img
                              src={img.src}
                              alt={img.alt}
                              draggable="false"
                              className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Glass Metadata */}
                          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 flex justify-between items-center">
                              <div>
                                <p className="text-[#A68A64] text-[10px] font-mono uppercase tracking-wider mb-1">
                                  {img.category}
                                </p>
                                <p className="text-white font-serif text-lg leading-none">
                                  {img.title}
                                </p>
                              </div>
                              <span className="text-white/20 font-mono text-xs">
                              {(i + 1).toString().padStart(2, '0')}
                            </span>
                            </div>
                          </div>
                        </div>

                        {/* Decorations */}
                        <div className="absolute -top-4 -left-4 w-[1px] h-8 bg-[#A68A64]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -top-4 -left-4 w-8 h-[1px] bg-[#A68A64]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                  ))}
                </motion.div>
              </div>

              {/* Progress Line */}
              <div className="w-full max-w-[90%] mx-auto mt-12 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                    style={{ scaleX: galleryProgress, transformOrigin: "left" }}
                    className="absolute inset-0 bg-[#A68A64]"
                />
              </div>

            </div>
            {/* --- END GALLERY CONTENT --- */}

          </div>
        </section>

        {/* Footer Space */}
        <div className="h-20 bg-[#0e0e0e]" />
      </div>
  );
}