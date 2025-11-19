// components/TextRevealSection.js
"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const rawText = `At Wolf Den, we are excited to introduce the first premiere cigar lounge in Ethiopia.

We strive to create a hidden upscale environment where our clients can escape into seclusion.

Come join us and allow us to provide you with a tranquil atmosphere, fine service, and premier drinks complemented by our world-class cigar collection.

Welcome to the Wolf Den!`;

const chars = Array.from(rawText);
const totalChars = chars.length;

export default function TextRevealSection() {
    const sectionRef = useRef(null);
    const [revealedChars, setRevealedChars] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (value) => {
            const count = Math.floor(value * totalChars * 1.15); // finish slightly early
            setRevealedChars(count);

            if (count >= totalChars && !isComplete) {
                setIsComplete(true);

                // Auto-scroll to gallery after text is fully revealed
                setTimeout(() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                    });
                }, 1000);
            }
        });

        return () => unsubscribe();
    }, [smoothProgress, isComplete]);

    return (
        <section
            ref={sectionRef}
            className="h-screen w-full flex items-center justify-center bg-[#121212] relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="relative z-10 text-center px-6 max-w-5xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
          <span className="text-[#A68A64] uppercase tracking-widest text-sm font-semibold block mb-4">
            Our Philosophy
          </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        The <span className="text-[#A68A64] italic font-light">Wolf Den</span> Story
                    </h2>
                </motion.div>

                {/* Revealing Text */}
                <div className="mt-20 text-xl md:text-3xl leading-relaxed text-gray-300 font-light whitespace-pre-wrap">
                    {chars.map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{
                                opacity: i < revealedChars ? 1 : 0,
                                y: i < revealedChars ? 0 : 40,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>

                {/* Scroll hint */}
                {!isComplete && (
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                )}
            </div>
        </section>
    );
}