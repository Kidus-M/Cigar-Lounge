import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image"

import WolfFamily from "../../assets/AboutPage/WolfFamily.png"
import WolfLoyalty from "../../assets/AboutPage/WolfLoyalty.png"
// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- NEW COMPONENT: WOLF CARD (Applying the modern card design to Wolf images) ---
const WolfCard = ({ image, title, label }) => {
  return (
      <div className="relative group w-full h-[500px] select-none border border-white/5 bg-[#121212] shadow-2xl">
        {/* Image Wrapper */}
        <div className="w-full h-full overflow-hidden relative">
          <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                     grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Glass Metadata Box (Appears on Hover/Default) */}
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="backdrop-blur-md bg-black/70 border border-white/10 p-5 flex flex-col gap-1 shadow-2xl">
              <p className="text-[#A68A64] text-[10px] font-sans uppercase tracking-[0.25em] mb-1">
                {label}
              </p>
              <h3 className="text-white font-serif text-2xl leading-none">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modern Decoration: Corner Lines */}
        {/* Top Left */}
        <div className="absolute -top-[1px] -left-[1px] w-[1px] h-12 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-[1px] -left-[1px] w-12 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom Right */}
        <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-12 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-[1px] -right-[1px] w-12 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
  );
};

// --- COMPONENT: WOLF SECTION ---
const WolfSection = ({ image, title, label, text, highlight, reversed }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 py-20 border-b border-white/5 last:border-0`}
    >
      {/* Image Side - Using the new WolfCard Design */}
      <motion.div variants={imageReveal} className="w-full md:w-1/2 relative p-4">
        <WolfCard image={image} title={title} label={label} />
      </motion.div>

      {/* Text Side */}
      <motion.div variants={fadeInUp} className="w-full md:w-1/2 text-center md:text-left space-y-6 px-4">
      <span className="text-[#A68A64] text-xs font-sans font-bold uppercase tracking-widest border-b border-[#A68A64] pb-2 inline-block md:hidden">
        {label}
      </span>
        <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">{title}</h3>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          {text}
        </p>
        <div className="relative pl-6 border-l-2 border-[#A68A64]/50 mt-6">
          <p className="text-white font-medium italic text-lg">
            "{highlight}"
          </p>
        </div>
      </motion.div>
    </motion.div>
);

export default function AboutPage() {
  return (
      <div className="bg-[#121212] min-h-screen text-[#F3F4F6] font-sans selection:bg-[#A68A64] selection:text-black overflow-x-hidden">


        {/* --- HERO HEADER --- */}
        <div className="relative pt-32 pb-20 px-6 text-center bg-[#121212]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-[#A68A64]"></div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
          >
            <span className="text-[#A68A64] uppercase tracking-[0.4em] text-sm font-semibold">The Philosophy</span>
            <h1 className="text-6xl md:text-9xl font-serif text-white mt-8 mb-8 tracking-tight">
              The <span className="text-[#A68A64] italic">Wolf</span>
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                "A wolf does not talk about strength, loyalty, or leadership. It lives it."
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

          {/* 1. FAMILY */}
          <WolfSection
              image={WolfFamily}
              title="The Pack is Family"
              label="Connection"
              text="Wolves live in packs. It is not just a group; it is a family unit bonded by blood, trust, and shared survival."
              highlight="At the Wolf Den, we consider—and treat—all who enter as family."
              reversed={false}
          />

          {/* 2. LOYALTY */}
          <WolfSection
              image={WolfLoyalty}
              title="Unwavering Loyalty"
              label="Commitment"
              text="Wolves are extremely loyal to their own. Their survival depends on the strength of their bond and the integrity of the pack."
              highlight="Our staff is committed to this code. We understand that our survival is embedded in the loyalty we give to you."
              reversed={true}
          />

          {/* 3. DOMINANCE */}
          <WolfSection
              image="/w5.png"
              title="Unrivaled Excellence"
              label="Dominance"
              text="Nothing hunts the wolf. It stands at the apex, confident and composed, master of its domain."
              highlight="The Wolf Den has no competition. We strive everyday to be the best because we offer the best in class, elegance, and service."
              reversed={false}
          />

          {/* 4. PROTECTION */}
          <WolfSection
              image="/w6.png"
              title="The Sanctuary"
              label="Safety"
              text="A den is not just where a wolf lives, but where they protect their own. It is a place of rest, strategy, and safety."
              highlight="At the Wolf Den, we advocate for a safe, secluded environment for our customers and our staff."
              reversed={true}
          />

          {/* --- CONCLUSION SECTION --- */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="pt-32 pb-16 text-center max-w-5xl mx-auto"
          >
            <Quote className="w-16 h-16 text-[#A68A64] mx-auto mb-10 opacity-50" />
            <p className="text-2xl md:text-4xl font-serif text-white leading-snug">
              "When you add <span className="text-[#A68A64]">strength</span> + <span className="text-[#A68A64]">loyalty</span> + <span className="text-[#A68A64]">leadership</span>, it equals what is at the core of every wolf: <span className="italic border-b border-[#A68A64]">Family</span>."
            </p>
            <p className="mt-10 text-gray-400 font-light text-lg max-w-2xl mx-auto">
              Here at our lounge, we embrace the wolf. We can welcome you in, but we can also welcome you out. Choose your path.
            </p>
            <p className="mt-8 text-[#A68A64] text-xl font-medium uppercase tracking-[0.3em]">
              Welcome to the Wolf Den
            </p>

            {/* Final Large Image with Card Style applied */}
            <div className="mt-20 max-w-4xl mx-auto">
              <WolfCard image="/w7.png" title="The Den" label="Established 2024" />
            </div>
          </motion.div>
        </div>

      </div>
  );
}