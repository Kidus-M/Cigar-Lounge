"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 text-white hover:bg-grey-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-white hover:text-orange-600 transition-all"
        >
          WolfDen
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => router.push("/menu")}
          >
            Menu
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-10 absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6">
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => {
              setIsOpen(false);
              router.push("/menu");
            }}
          >
            Menu
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => {
              setIsOpen(false);
              router.push("/about");
            }}
          >
            About
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => {
              setIsOpen(false);
              router.push("/events");
            }}
          >
            Events
          </button>
          <button
            className="text-white text-lg font-medium relative hover:border-b-2 border-orange-600 transition-all"
            onClick={() => {
              setIsOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
