import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";

// Animation Variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
      <footer className="relative w-full bg-[#121212] overflow-hidden pt-20 md:pt-32 pb-6 border-t border-white/5">
        <motion.div
            className="px-4 mx-auto max-w-screen-2xl md:px-12 lg:px-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
          {/* --- TOP SECTION: CTA & Columns --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

            {/* 1. The Invitation (Span 6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <motion.div variants={itemVariants}>
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-white mb-8">
                  Ready for the <br />
                  <span className="text-tobacco italic">night shift?</span>
                </h2>
                <div className="flex flex-col gap-6 items-start">
                  <a
                      href="mailto:wolfdenaddis@gmail.com"
                      className="group flex items-center gap-4 text-lg md:text-xl border border-white/20 rounded-full px-8 py-3 transition-all duration-300 hover:bg-tobacco hover:border-tobacco hover:text-charcoal"
                  >
                    <span>Reserve a Table</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* 2. Details Column (Span 3) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-tobacco">
                  Visit Us
                </h4>
                <p className="text-smoke/80 font-light leading-relaxed">
                  From Gazebo to Wollo Sefer Road<br />
                  Addis Ababa, Ethiopia
                </p>
                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm border-b border-white/30 pb-1 hover:border-tobacco hover:text-tobacco transition-colors"
                >
                  Get Directions
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-tobacco">
                  Contact
                </h4>
                <div className="flex flex-col gap-1 text-smoke/80 font-light">
                  <a href="tel:0979398094" className="hover:text-white transition-colors">
                    +251 97 939 8094
                  </a>
                  <a href="mailto:wolfdenaddis@gmail.com" className="hover:text-white transition-colors">
                    wolfdenaddis@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 3. Social Column (Span 3) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-tobacco">
                  Social
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
                    { name: "Youtube", icon: Youtube, url: "https://youtube.com" },
                    { name: "TikTok", icon: null, url: "https://tiktok.com", isTiktok: true }
                  ].map((social) => (
                      <li key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-between w-full border-b border-white/10 pb-3 hover:border-tobacco transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {social.isTiktok ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="transition-colors group-hover:text-tobacco">
                                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                                </svg>
                            ) : (
                                <social.icon size={18} className="transition-colors group-hover:text-tobacco" />
                            )}
                            <span className="font-light text-smoke group-hover:text-white transition-colors">{social.name}</span>
                          </div>
                          <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-tobacco" />
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* --- BIG FOOTER TEXT --- */}
          <motion.div
              className="relative pt-10 border-t border-white/10 flex justify-center overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            {/* This uses your font-serif variable and massive responsive text */}
            <motion.h1
                variants={letterVariants}
                className="font-serif text-[13vw] md:text-[16vw] leading-none text-tobacco opacity-20 whitespace-nowrap select-none"
            >
              WOLF DEN.
            </motion.h1>
          </motion.div>

          {/* --- BOTTOM COPYRIGHT --- */}
          <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-smoke/30 uppercase tracking-wider"
          >
            <p>© 2025 Wolf Den Lounge.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-tobacco transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-tobacco transition-colors">Terms of Service</a>
            </div>
          </motion.div>

        </motion.div>
      </footer>
  );
}