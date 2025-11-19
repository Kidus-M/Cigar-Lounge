// components/GallerySection.js
"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const images = [
    { src: "https://images.unsplash.com/photo-1596708304910-410a0e5b8e97?q=80&w=1800&auto=format&fit=crop", w: 420, h: 340 },
    { src: "https://images.unsplash.com/photo-1594917452661-8e0f59ef278a?q=80&w=1500&auto=format&fit=crop", w: 300, h: 460 },
    { src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1800&auto=format&fit=crop", w: 520, h: 380 },
    { src: "https://images.unsplash.com/photo-1627883204901-4470876798e8?q=80&w=1500&auto=format&fit=crop", w: 280, h: 340 },
    { src: "https://images.unsplash.com/photo-1601618210137-0201083437e6?q=80&w=1500&auto=format&fit=crop", w: 420, h: 460 },
    { src: "https://images.unsplash.com/photo-1587391807080-b26a117094b8?q=80&w=1800&auto=format&fit=crop", w: 360, h: 340 },
    { src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1500&auto=format&fit=crop", w: 300, h: 380 },
    { src: "https://images.unsplash.com/photo-1532634726-8b9fb99825c7?q=80&w=1500&auto=format&fit=crop", w: 480, h: 380 },
];

export default function GallerySection() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [maxTranslate, setMaxTranslate] = React.useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    useEffect(() => {
        const updateMaxTranslate = () => {
            if (!sectionRef.current || !trackRef.current) return;
            const overflow = trackRef.current.scrollWidth - sectionRef.current.clientWidth;
            setMaxTranslate(Math.max(0, overflow));
        };

        updateMaxTranslate();
        window.addEventListener("resize", updateMaxTranslate);
        return () => window.removeEventListener("resize", updateMaxTranslate);
    }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${-v * maxTranslate}px)`;
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, maxTranslate]);

    return (
        <section
            ref={sectionRef}
            className="h-screen w-full flex items-center bg-[#121212] relative overflow-hidden"
        >
            <div className="w-full px-8">
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex items-end gap-10 py-10"
                        style={{ willChange: "transform" }}
                    >
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                style={{ width: img.w, height: img.h }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ scale: 1.06 }}
                            >
                                <img
                                    src={img.src}
                                    alt={`Wolf Den interior ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    draggable="false"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}