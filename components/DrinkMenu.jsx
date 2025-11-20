import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- DATA (Inlined for portability) ---
const previewDrinks = [
  {
    id: 1,
    name: "Lone Wolf",
    description: "Lime juice, ginger beer, vodka, mint, ice, lime",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", // Placeholder
    price: 650,
    category: "Wolf Pack",
  },
  {
    id: 2,
    name: "Ms Rabbit",
    description: "Cold coffee, vodka, coffee liqueur, espresso beans",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80", // Placeholder
    price: 700,
    category: "Wolf Pack",
  },
  {
    id: 3,
    name: "Doctor's Note",
    description: "Cinnamon stick, lemon juice, hot water, lemon, whiskey, honey",
    imageUrl: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80", // Placeholder
    price: 680,
    category: "Wolf Pack",
  }
];

// --- REUSABLE CARD COMPONENT ---
const DrinkCard = ({ drink }) => {
  return (
      <div className="relative group w-full h-[420px] select-none">
        {/* Image Wrapper with Overflow Hidden */}
        <div className="w-full h-full overflow-hidden relative bg-[#1a1a1a]">
          <img
              src={drink.imageUrl}
              alt={drink.name}
              className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                     grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glass Metadata Box */}
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#A68A64] text-[10px] font-mono uppercase tracking-wider mb-1">
                    {drink.category}
                  </p>
                  <h3 className="text-white font-serif text-xl leading-none">
                    {drink.name}
                  </h3>
                </div>
                <span className="text-white/90 font-mono text-sm border border-[#A68A64]/30 px-2 py-1 rounded-full bg-[#121212]/50">
                {drink.price}<span className="text-[10px] ml-1">ETB</span>
              </span>
              </div>
              {/* Description reveals inside the box */}
              <p className="text-white/60 text-xs font-light leading-relaxed border-t border-white/10 pt-2 mt-1">
                {drink.description}
              </p>
            </div>
          </div>
        </div>

        {/* External Decorations (Corner Lines) */}
        <div className="absolute -top-2 -left-2 w-[1px] h-8 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-2 -left-2 w-8 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom Right Decorations */}
        <div className="absolute -bottom-2 -right-2 w-[1px] h-8 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-2 -right-2 w-8 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
  );
};

export default function MenuPreview() {
  return (
      <section className="relative py-32 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-12 max-w-screen-xl">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
            <span className="text-[#A68A64] font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              The Collection
            </span>
              <h2 className="text-white text-4xl md:text-6xl font-serif tracking-tight">
                Taste the <span className="italic text-[#A68A64]">Wild</span>
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                  href="/menu"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <span className="text-sm font-mono uppercase tracking-wider">View Full Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 text-[#A68A64]" />
              </a>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {previewDrinks.map((drink, idx) => (
                <motion.div
                    key={drink.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                  <DrinkCard drink={drink} />
                </motion.div>
            ))}
          </div>

        </div>
      </section>
  );
}