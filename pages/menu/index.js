import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ClassicMojito from "../../assets/Menu/ClassicMojito.png"
import LoneWolf from "../../assets/Menu/LoneWolf.png"
import MsRabbit from "../../assets/Menu/MsRabbit.png"
import DoctorsNote from "../../assets/Menu/DoctorsNote.png"
import RoyalMartini from "../../assets/Menu/RoyalMartini.png"
import Margarita from "../../assets/Menu/Margarita.png"
import Daiquiri from "../../assets/Menu/Daiquiri.png"
import Manhattan from "../../assets/Menu/Manhattan.png"
import GinSour from "../../assets/Menu/GinSour.png"
import WhiskeySour from "../../assets/Menu/WhiskeySour.png"
import BourbonFlip from "../../assets/Menu/BourbonFlip.png"
import OldFashioned from "../../assets/Menu/OldFashioned.png"
import PaperPlane from "../../assets/Menu/PaperPlane.png"
import BlueOcean from "../../assets/Menu/BlueOcean.png"
// --- DATA ---
// (Inlined for immediate stability)
const drinks = [
  {
    id: 1,
    name: "Lone Wolf",
    description: "Lime juice, ginger beer, vodka, mint, ice, lime",
    imageUrl: LoneWolf,
    price: "",
    category: "Wolf Pack",
  },
  {
    id: 2,
    name: "Ms Rabbit",
    description: "Cold coffee, vodka, coffee liqueur, espresso beans",
    imageUrl: MsRabbit,
    price: "",
    category: "Wolf Pack",
  },
  {
    id: 3,
    name: "Doctor's Note",
    description: "Cinnamon stick, lemon juice, hot water, lemon, whiskey, honey",
    imageUrl: DoctorsNote,
    price: "",
    category: "Wolf Pack",
  },
  {
    id: 4,
    name: "Classic Mojito",
    description: "Rum infused with fresh lime, mint and sugar.",
    imageUrl: ClassicMojito,
    price: 355,
    category: "Cocktails",
  },
  {
    id: 5,
    name: "Royal Martini",
    description: "Freshly brewed espresso mixed with rum and lime.",
    imageUrl: RoyalMartini,
    price: 1100,
    category: "Cocktails",
  },
  {
    id: 6,
    name: "Margarita",
    description: "Tequila, triple sek, lime juice, salt.",
    imageUrl: Margarita,
    price: 1890,
    category: "Cocktails",
  },
  {
    id: 7,
    name: "Daiquiri",
    description: "Rum, lemon juice and sugar mixed with apple.",
    imageUrl: Daiquiri,
    price: 900,
    category: "Cocktails",
  },
  {
    id: 14,
    name: "Gin Sour",
    description: "Gin, lime juice, sugar syrup.",
    imageUrl: GinSour,
    price: 455,
    category: "Cocktails",
  },
  {
    id: 8,
    name: "Manhattan",
    description: "White rum mixed with whiskey and sugar.",
    imageUrl: Manhattan,
    price: 950,
    category: "Whiskey Cocktails",
  },
  {
    id: 9,
    name: "Whiskey Sour",
    description: "Whisky, lime juice, sugar syrup, 1 white egg.",
    imageUrl: WhiskeySour,
    price: 575,
    category: "Whiskey Cocktails",
  },
  {
    id: 10,
    name: "Bourbon Flip",
    description: "Premium whiskey, lime mixed with sugar syrup.",
    imageUrl: BourbonFlip,
    price: 535,
    category: "Whiskey Cocktails",
  },
  {
    id: 11,
    name: "Old Fashioned",
    description: "Brown sugar, lime and sugar mixed with whiskey.",
    imageUrl: OldFashioned,
    price: 589,
    category: "Whiskey Cocktails",
  },
  {
    id: 12,
    name: "Paper Plane",
    description: "Premium whiskey mixed with lime and sugar.",
    imageUrl: PaperPlane,
    price: 538,
    category: "Whiskey Cocktails",
  },
  {
    id: 13,
    name: "Blue Ocean",
    description: "Blue curaçao, lime juice, sprite, triple sek.",
    imageUrl: BlueOcean,
    price: 800,
    category: "Weekend Special",
  },
];

// --- RESPONSIVE CARD COMPONENT ---
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
          {/* IMAGE:
            Mobile: Always full color & bright.
            Desktop (md+): Grayscale & Dimmed, reveals on hover.
        */}
          <Image
              src={drink.imageUrl}
              alt={drink.name}
              className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                     grayscale-0 brightness-100 scale-100
                     md:grayscale md:brightness-75 md:scale-100
                     md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-105"
          />

          {/* GRADIENT OVERLAY:
            Mobile: Always visible to make text readable.
            Desktop (md+): Hidden by default, fades in on hover.
        */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent transition-opacity duration-500
                        opacity-100
                        md:opacity-0 md:group-hover:opacity-100"
          />

          {/* METADATA CONTENT:
            Mobile: Always visible (opacity 100, no translate).
            Desktop (md+): Hidden (opacity 0, translate y) -> Slides up on hover.
        */}
          <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 delay-75
                        opacity-100 translate-y-0
                        md:opacity-0 md:translate-y-4
                        md:group-hover:translate-y-0 md:group-hover:opacity-100">

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

        {/* CORNER LINES:
          Mobile: Always visible.
          Desktop (md+): Fade in on hover.
      */}
        <div className="absolute -top-2 -left-2 w-[1px] h-8 bg-[#A68A64] transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute -top-2 -left-2 w-8 h-[1px] bg-[#A68A64] transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute -bottom-2 -right-2 w-[1px] h-8 bg-[#A68A64] transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute -bottom-2 -right-2 w-8 h-[1px] bg-[#A68A64] transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100" />
      </motion.div>
  );
};

const Menu = () => {
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
        <Head>
          <title>Menu | Wolf Den Lounge</title>
          <meta name="description" content="Explore our curated selection of spirits and cocktails." />
        </Head>



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
          <div className={`sticky top-15 z-10 transition-all duration-300 ${isScrolled ? "bg-[#121212]/90 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-8"}`}>
            <div className="px-4 md:px-12 max-w-screen-xl mx-auto">
              {/* Horizontal scroll on mobile for categories if needed */}
              <div className="overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                <div className="flex md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 min-w-max">
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
};

export default Menu;