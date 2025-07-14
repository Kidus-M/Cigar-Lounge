"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    {name: "Staff", path: "/Staff" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
      <>
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out text-white ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="backdrop-blur-md bg-black/70 border-b border-white/10 px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
            <Link
                href="/"
                className="text-2xl font-bold text-white tracking-tight hover:text-green-500 transition duration-200"
            >
              Wolf Den
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-8">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.path;
                return (
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`relative text-sm uppercase font-medium tracking-wide transition-colors duration-200 ${
                            isActive ? "text-green-500" : "text-white hover:text-green-400"
                        }`}
                    >
                      {link.name}
                      <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-out ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      />
                    </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-300 ease-in-out text-white ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col pt-24 px-6 gap-6">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                  <Link
                      key={link.name}
                      href={link.path}
                      className={`text-lg font-semibold transition-all duration-200 ${
                          isActive
                              ? "text-green-500 border-l-4 border-green-500 pl-4"
                              : "text-white hover:text-green-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
              );
            })}
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
            <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
            ></div>
        )}
      </>
  );
}
