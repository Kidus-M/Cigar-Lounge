import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X, Instagram, Youtube, ArrowUpRight, Quote } from "lucide-react";

// --- DATA ---
const staffMembers = [
    {
        id: 1,
        name: "Wongel",
        role: "Operational Manager",
        bio: "My education is in Marketing Management. I bring extensive experience in customer service, sales, and personal assistance to ensure operations run seamlessly.",
        imageUrl: "/staff2.jpg",
    },
    {
        id: 2,
        name: "Helen",
        role: "Hostess",
        bio: "I hold a degree in Hotel Management. With several years of experience in hospitality and a creative background in video editing, I ensure every guest feels welcome.",
        imageUrl: "/staff5.jpg",
    },
    {
        id: 3,
        name: "Kidist",
        role: "Hostess",
        bio: "Currently studying pharmacy, I bring a precise and warm approach to service, ensuring your evening at the Wolf Den is nothing short of exceptional.",
        imageUrl: "/staff6.jpg",
    },
    {
        id: 4,
        name: "Kidist",
        role: "Hostess",
        bio: "With professional experience in waitressing, I am dedicated to providing attentive and gracious service to our distinguished guests.",
        imageUrl: "/staff7.jpg",
    },
    {
        id: 5,
        name: "Blen",
        role: "Social Media Coordinator",
        bio: "I oversee the social media platforms for Wolf Den. I enjoy working on creative content and engaging with customers in the digital space.",
        imageUrl: "/staff3.jpg",
    },
    {
        id: 6,
        name: "Bitanya",
        role: "Marketing Lead",
        bio: "A Marketing Management graduate with experience in sales and team leadership. I oversee the digital marketing strategy that brings the Wolf Den to life online.",
        imageUrl: "/staff4.jpg",
    },
    {
        id: 7,
        name: "Tsegereda",
        role: "Accountant",
        bio: "I hold a Bachelor of Arts in Accounting with seven years of experience in auditing. I ensure the financial integrity of the Wolf Den family.",
        imageUrl: "/staff1.jpg",
    },
];


// --- STAFF CARD ---
const StaffCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#1a1a1a] mb-6">
                {/* Placeholder/Real Image Logic */}
                <img
                    src={member.imageUrl} // Fallback for demo
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out
                               grayscale brightness-[0.8] scale-100
                               group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />

                {/* Hover Line Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A68A64] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
            </div>

            {/* Text Content */}
            <div className="text-left relative px-2">
                <div className="flex flex-col mb-3">
                    <span className="text-[#A68A64] font-mono text-[10px] uppercase tracking-[0.2em] mb-1">
                        {member.role}
                    </span>
                    <h3 className="text-white font-serif text-3xl tracking-tight group-hover:text-[#A68A64] transition-colors duration-300">
                        {member.name}
                    </h3>
                </div>

                <div className="relative">
                    {/* Decorative Quote Icon */}
                    <Quote className="absolute -top-2 -left-4 w-3 h-3 text-[#A68A64]/20 rotate-180" />
                    <p className="text-white/50 text-sm font-light leading-relaxed font-sans pl-0 border-l-0 transition-all duration-500 group-hover:text-white/80">
                        {member.bio}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN PAGE ---
const StaffPage = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-gray-300 selection:bg-[#A68A64] selection:text-black">


            {/* Hero Section */}
            <div className="pt-40 pb-20 px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#A68A64] font-mono text-xs tracking-[0.4em] uppercase block mb-6">
                        Behind the Scenes
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight">
                        The <span className="italic text-[#A68A64]">Curators</span>
                    </h1>
                    <div className="h-[1px] w-24 bg-white/20 mx-auto" />
                    <p className="text-white/40 mt-8 max-w-xl mx-auto text-sm leading-relaxed font-mono">
                        Meet the dedicated individuals who craft the atmosphere, service, and soul of the Wolf Den.
                        Professionals dedicated to the art of hospitality.
                    </p>
                </motion.div>
            </div>

            {/* Grid Section */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                    {staffMembers.map((member, index) => (
                        <StaffCard key={index} member={member} index={index} />
                    ))}

                    {/* Join the Team Card (Optional CTA) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center text-center border border-white/5 bg-white/[0.02] aspect-[3/4] p-8 hover:bg-white/[0.04] transition-colors cursor-pointer group"
                    >
                        <h3 className="text-2xl font-serif text-white mb-4">Join the Pack</h3>
                        <p className="text-white/40 text-sm mb-6 max-w-[200px]">
                            Are you passionate about luxury hospitality? We are always looking for talent.
                        </p>
                        <div className="w-10 h-10 rounded-full border border-[#A68A64] flex items-center justify-center text-[#A68A64] group-hover:bg-[#A68A64] group-hover:text-black transition-all">
                            <ArrowUpRight size={20} />
                        </div>
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default StaffPage;