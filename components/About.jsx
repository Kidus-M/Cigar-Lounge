"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPreview() {
  const scrollTrackRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const galleryTrackRef = useRef(null);

  const rawText = [
    "At Wolf Den, we are excited to introduce the first premiere cigar lounge in Ethiopia.",
    "We strive to create a hidden upscale environment where our clients can escape into seclusion. ",
    "Come join us and allow us to provide you with a tranquil atmosphere, fine service, and premier drinks complemented by our world-class cigar collection.",
    "Welcome to the Wolf Den!"
  ].join("\n\n");

  const chars = Array.from(rawText);
  const totalChars = chars.length;

  // --- SCROLL LOGIC ---
  const { scrollYProgress: textProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: galleryProgress } = useScroll({
    target: gallerySectionRef,
    offset: ["start end", "end start"],
  });

  const [revealedChars, setRevealedChars] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Calculate revealed characters
  useEffect(() => {
    const unsub = textProgress.on("change", (v) => {
      const clamped = Math.max(0, Math.min(1, v));
      const count = Math.floor(clamped * totalChars);
      setRevealedChars(count);
    });
    return () => unsub();
  }, [textProgress, totalChars]);

  // Gallery Width Calculation
  const images = [
    { src: "https://images.unsplash.com/photo-1596708304910-410a0e5b8e97?q=80&w=1800&auto=format&fit=crop", alt: "Lounge", w: 380, h: 300 },
    { src: "https://images.unsplash.com/photo-1594917452661-8e0f59ef278a?q=80&w=1500&auto=format&fit=crop", alt: "Cocktails", w: 260, h: 420 },
    { src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1800&auto=format&fit=crop", alt: "Seating", w: 480, h: 360 },
    { src: "https://images.unsplash.com/photo-1627883204901-4470876798e8?q=80&w=1500&auto=format&fit=crop", alt: "Cigar", w: 230, h: 290 },
    { src: "https://images.unsplash.com/photo-1601618210137-0201083437e6?q=80&w=1500&auto=format&fit=crop", alt: "Whiskey", w: 400, h: 420 },
    { src: "https://images.unsplash.com/photo-1587391807080-b26a117094b8?q=80&w=1800&auto=format&fit=crop", alt: "Lighting", w: 320, h: 300 },
    { src: "https://images.unsplash.com/photo-1532634726-8b9fb99825c7?q=80&w=1500&auto=format&fit=crop", alt: "Interior", w: 450, h: 360 },
  ];

  useEffect(() => {
    const calcResize = () => {
      if (galleryTrackRef.current && gallerySectionRef.current) {
        const trackW = galleryTrackRef.current.scrollWidth;
        const viewW = window.innerWidth;
        setMaxTranslate(trackW - viewW + 100);
      }
    };
    calcResize();
    window.addEventListener("resize", calcResize);
    return () => window.removeEventListener("resize", calcResize);
  }, []);

  const translateX = useTransform(galleryProgress, [0, 1], [0, -maxTranslate]);

  // --- RENDER LOGIC ---
  const renderText = () => {
    // Split by words OR spaces/newlines
    const parts = rawText.match(/(\s+|\S+)/g) || [];
    let charIndex = 0;

    return parts.map((part, pIdx) => {
      const partChars = Array.from(part);
      // Check if this part is purely whitespace (space or newline)
      const isSpace = /^\s+$/.test(part);

      return (
          <span
              key={pIdx}
              className="inline-block"
              // 'whiteSpace: pre' preserves the actual space/newline characters
              // 'whiteSpace: nowrap' keeps words intact
              style={{ whiteSpace: isSpace ? "pre" : "nowrap" }}
          >
          {partChars.map((c, cIdx) => {
            const currentGlobalIndex = charIndex + cIdx;
            const isVisible = currentGlobalIndex < revealedChars;

            return (
                <motion.span
                    key={currentGlobalIndex}
                    className="inline-block"
                    // The Animation: Start invisible and slightly lower (y:10), pop up to visible (y:0)
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {c}
                </motion.span>
            );
          })}
            {/* Hidden incrementor for our global index */}
            <span className="hidden">{(charIndex += partChars.length)}</span>
        </span>
      );
    });
  };

  return (
      <section className="relative w-full bg-[#121212]">

        {/* SCROLL JAIL: Adjust height (e.g. 300vh) to change scroll speed */}
        <div ref={scrollTrackRef} className="relative h-[350vh]">

          {/* STICKY CONTAINER: Holds content in center */}
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="relative z-10 max-w-5xl px-6 text-center">
              {/* Heading */}
              <div className="mb-12">
                <span className="text-[#A68A64] uppercase tracking-[0.25em] text-xs md:text-sm font-bold mb-4 block">
                  Our Philosophy
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-white">
                  The <span className="text-[#A68A64] italic font-light">Wolf Den</span> Story
                </h2>
              </div>

              {/* Text Block */}
              <div className="min-h-[300px] flex items-start justify-center">
                <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200 max-w-4xl text-center">
                  {renderText()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY: Appears naturally after scroll jail ends */}
        {/* --- GALLERY SECTION --- */}
        <div ref={gallerySectionRef} className="relative z-20 bg-[#0e0e0e] pb-32 pt-24 overflow-hidden">

          {/* Section Header */}
          <div className="max-w-[90%] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
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
                Swipe to explore our curated spaces, designed for privacy and comfort.
              </p>
            </div>
          </div>

          {/* Scrolling Track */}
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
                    {/* Image Container */}
                    <div className="w-full h-full overflow-hidden relative bg-[#1a1a1a]">
                      <img
                          src={img.src}
                          alt={img.alt}
                          draggable="false"
                          className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                               grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                      />

                      {/* Hover Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Glass Label (Appears on Hover) */}
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

                    {/* Vertical Line Decoration (Outside the image) */}
                    <div className="absolute -top-4 -left-4 w-[1px] h-8 bg-[#A68A64]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-4 -left-4 w-8 h-[1px] bg-[#A68A64]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Progress Bar */}
          <div className="w-full max-w-[90%] mx-auto mt-16 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
                style={{ scaleX: galleryProgress, transformOrigin: "left" }}
                className="absolute inset-0 bg-[#A68A64]"
            />
          </div>

        </div>

        {/* Spacer */}
        <div className="h-20 bg-[#121212]" />
      </section>
  );
}