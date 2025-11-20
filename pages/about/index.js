import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// --- SHARED COMPONENTS (Mocked for standalone usage, replace with your actual imports) ---
const Navbar = () => <nav className="w-full py-6 px-8 flex justify-between items-center bg-[#121212] border-b border-white/5"><span className="text-2xl font-serif text-white">Wolf Den<span className="text-[#A68A64]">.</span></span><span className="text-gray-400 text-sm uppercase tracking-widest">The Lounge</span></nav>;
const Footer = () => <footer className="w-full py-12 bg-black text-center text-gray-500 border-t border-white/10"><p>© 2025 Wolf Den Lounge</p></footer>;

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
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- SECTION COMPONENT ---
const WolfSection = ({ image, title, text, highlight, reversed }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-24 border-b border-white/5 last:border-0`}
    >
      {/* Image Side */}
      <motion.div variants={imageReveal} className="w-full md:w-1/2 relative">
        <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-[#A68A64]/20 mix-blend-overlay z-10"></div>
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 grayscale-[30%] hover:grayscale-0"
          />
          {/* Decorative Border */}
          <div className={`absolute top-4 ${reversed ? 'right-4' : 'left-4'} w-full h-full border border-[#A68A64]/30 -z-10`}></div>
        </div>
      </motion.div>

      {/* Text Side */}
      <motion.div variants={fadeInUp} className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h3 className="text-3xl font-serif text-white">{title}</h3>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          {text}
          <br />
          <span className="block mt-4 text-[#A68A64] font-medium italic border-l-2 border-[#A68A64] pl-4">
          {highlight}
        </span>
        </p>
      </motion.div>
    </motion.div>
);

export default function AboutPage() {
  return (
      <div className="bg-[#121212] min-h-screen text-[#F3F4F6] font-sans selection:bg-[#A68A64] selection:text-black">
        {/*<Navbar />*/}

        {/* --- HERO HEADER --- */}
        <div className="relative pt-32 pb-20 px-6 text-center bg-[#121212]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-[#A68A64]"></div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
          >
            <span className="text-[#A68A64] uppercase tracking-[0.4em] text-sm font-semibold">The Philosophy</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mt-6 mb-8">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* 1. FAMILY */}
          <WolfSection
              image="/w1.png"
              title="The Pack is Family"
              text="Wolves live in packs. It is not just a group; it is a family unit bonded by blood and trust."
              highlight="At the Wolf Den, we consider—and treat—all who enter as family."
              reversed={false}
          />

          {/* 2. LOYALTY */}
          <WolfSection
              image="/w3.png"
              title="Unwavering Loyalty"
              text="Wolves are extremely loyal to their own. Their survival depends on the strength of their bond."
              highlight="Our staff is committed to this code. We understand that our survival is embedded in the loyalty we give to you."
              reversed={true}
          />

          {/* 3. DOMINANCE */}
          <WolfSection
              image="/w5.png"
              title="Unrivaled Excellence"
              text="Nothing hunts the wolf. It stands at the apex, confident and composed."
              highlight="The Wolf Den has no competition. We strive everyday to be the best because we offer the best in class, elegance, and service."
              reversed={false}
          />

          {/* 4. PROTECTION */}
          <WolfSection
              image="/w6.png"
              title="The Sanctuary"
              text="A den is not just where a wolf lives, but where they protect their own."
              highlight="At the Wolf Den, we advocate for a safe, secluded environment for our customers and our staff."
              reversed={true}
          />

          {/* --- CONCLUSION SECTION --- */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="py-32 text-center max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-[#A68A64] mx-auto mb-8 opacity-50" />
            <p className="text-2xl md:text-3xl font-serif text-white leading-normal">
              "When you add <span className="text-[#A68A64]">strength</span> + <span className="text-[#A68A64]">loyalty</span> + <span className="text-[#A68A64]">leadership</span>, it equals what is at the core of every wolf: <span className="italic">Family</span>."
            </p>
            <p className="mt-8 text-gray-400 font-light text-lg">
              Here at our lounge, we embrace the wolf. We can welcome you in, but we can also welcome you out. Choose your path.
            </p>
            <p className="mt-6 text-[#A68A64] text-xl font-medium uppercase tracking-widest">
              Welcome to the Wolf Den
            </p>

            <div className="mt-16 relative w-full h-[400px] overflow-hidden rounded-sm">
              <img src="/w7.png" alt="The Wolf Den" className="w-full h-full object-contain opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
            </div>
          </motion.div>

          {/* --- GALLERY SECTION (Previous "About" Images) --- */}
          <div className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
              <span className="text-[#A68A64] uppercase tracking-widest text-xs">The Atmosphere</span>
              <h2 className="text-4xl font-serif text-white mt-4">Experience the Den</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { src: "/about1.jpeg", label: "The Ambiance" },
                { src: "/about2.jpeg", label: "The Spirits" },
                { src: "/about3.jpg", label: "The Comfort" }
              ].map((item, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="group relative h-[400px] overflow-hidden cursor-pointer"
                  >
                    <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                            <span className="text-white font-serif text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                {item.label}
                            </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A68A64] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/*<Footer />*/}
      </div>
  );
}