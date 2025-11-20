import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const drinks = [
  {
    id: 1,
    name: "Lone Wolf",
    description: "Lime juice, ginger beer, vodka, mint, ice, lime",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    price: 650,
    category: "Wolf Pack",
  },
  {
    id: 2,
    name: "Ms Rabbit",
    description: "Cold coffee, vodka, coffee liqueur, espresso beans",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    price: 700,
    category: "Wolf Pack",
  },
  {
    id: 3,
    name: "Doctor's Note",
    description: "Cinnamon stick, lemon juice, hot water, lemon, whiskey, honey",
    imageUrl: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80",
    price: 680,
    category: "Wolf Pack",
  },
  {
    id: 4,
    name: "Classic Mojito",
    description: "Rum infused with fresh lime, mint and sugar.",
    imageUrl: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
    price: 355,
    category: "Cocktails",
  },
  {
    id: 5,
    name: "Royal Martini",
    description: "Freshly brewed espresso mixed with rum and lime.",
    imageUrl: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=800&q=80",
    price: 1100,
    category: "Cocktails",
  },
  {
    id: 6,
    name: "Margarita",
    description: "Tequila, triple sek, lime juice, salt.",
    imageUrl: "https://images.unsplash.com/photo-1541544537156-3639b1651c5e?auto=format&fit=crop&w=800&q=80",
    price: 1890,
    category: "Cocktails",
  },
  {
    id: 7,
    name: "Daiquiri",
    description: "Rum, lemon juice and sugar mixed with apple.",
    imageUrl: "https://images.unsplash.com/photo-1615887023516-9b6c50139990?auto=format&fit=crop&w=800&q=80",
    price: 900,
    category: "Cocktails",
  },
  {
    id: 8,
    name: "Manhattan",
    description: "White rum mixed with whiskey and sugar.",
    imageUrl: "https://images.unsplash.com/photo-1618557112861-4414f3e124c9?auto=format&fit=crop&w=800&q=80",
    price: 950,
    category: "Whiskey Cocktails",
  },
  {
    id: 9,
    name: "Whiskey Sour",
    description: "Whisky, lime juice, sugar syrup, 1 white egg.",
    imageUrl: "https://images.unsplash.com/photo-1634506423977-f6b35ba2f98e?auto=format&fit=crop&w=800&q=80",
    price: 575,
    category: "Whiskey Cocktails",
  },
  {
    id: 10,
    name: "Bourbon Flip",
    description: "Premium whiskey, lime mixed with sugar syrup.",
    imageUrl: "https://images.unsplash.com/photo-1581636760376-d58e0d42792a?auto=format&fit=crop&w=800&q=80",
    price: 535,
    category: "Whiskey Cocktails",
  },
  {
    id: 11,
    name: "Old Fashioned",
    description: "Brown sugar, lime and sugar mixed with whiskey.",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    price: 589,
    category: "Whiskey Cocktails",
  },
  {
    id: 12,
    name: "Blue Ocean",
    description: "Blue curaçao, lime juice, sprite, triple sek.",
    imageUrl: "https://images.unsplash.com/photo-1560512823-8db03e1b2181?auto=format&fit=crop&w=800&q=80",
    price: 800,
    category: "Weekend Special",
  },
];

// --- CARD COMPONENT ---
const DrinkCard = ({ drink }) => {
  return (
      <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="relative group w-full h-[400px] md:h-[450px] select-none"
      >
        <div className="w-full h-full overflow-hidden relative bg-[#1a1a1a]">
          <img
              src={drink.imageUrl}
              alt={drink.name}
              className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                     grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                {drink.price} <span className="text-[10px]">ETB</span>
              </span>
              </div>
              <p className="text-white/60 text-xs font-light leading-relaxed border-t border-white/10 pt-2 mt-1">
                {drink.description}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -top-2 -left-2 w-[1px] h-8 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-2 -left-2 w-8 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-2 -right-2 w-[1px] h-8 bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-2 -right-2 w-8 h-[1px] bg-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
  );
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ["All", "Wolf Pack", "Cocktails", "Whiskey Cocktails", "Weekend Special"];

  const filteredDrinks = selectedCategory === "All"
      ? drinks
      : drinks.filter(drink => drink.category === selectedCategory);

  // Detect scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="bg-[#121212] min-h-screen text-white selection:bg-[#A68A64] selection:text-black">

        <main className="pt-32 pb-24">

          {/* --- HERO HEADER --- */}
          <div className="px-4 md:px-12 max-w-screen-xl mx-auto mb-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <span className="text-[#A68A64] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                The Archive
              </span>
              <h1 className="text-6xl md:text-8xl font-serif mb-6">
                Liquid <span className="italic text-[#A68A64]">Artistry</span>
              </h1>
              <p className="text-white/40 max-w-md mx-auto font-mono text-sm leading-relaxed">
                A carefully composed collection of classics and house signatures,
                designed to elevate your evening.
              </p>
            </motion.div>
          </div>

          {/* --- STICKY FILTER BAR --- */}
          <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#121212]/90 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-8"}`}>
            <div className="px-4 md:px-12 max-w-screen-xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                    relative px-6 py-2 text-xs md:text-sm font-mono uppercase tracking-wider rounded-full transition-all duration-300 border
                    ${selectedCategory === category
                            ? "border-[#A68A64] text-[#A68A64] bg-[#A68A64]/10"
                            : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                        }
                  `}
                    >
                      {category}
                    </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- MENU GRID --- */}
          <div className="px-4 md:px-12 max-w-screen-xl mx-auto mt-12">
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredDrinks.map((drink) => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredDrinks.length === 0 && (
                <div className="text-center py-20 text-white/30 font-mono">
                  No drinks found in this category.
                </div>
            )}
          </div>

        </main>
      </div>
  );
}