import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "The Menu", path: "/menu" },
    { name: "Our Story", path: "/about" },
    { name: "Membership", path: "/membership" }, // Suggested for a lounge
    { name: "Events", path: "/events" },
    { name: "Reserve", path: "/contact" },
  ];

  // Handle scroll effect for glass background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                scrolled
                    ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Logo - Using Serif for elegance */}
            <Link
                href="/"
                className="text-2xl md:text-3xl font-serif text-white tracking-tight hover:text-[#A68A64] transition-colors duration-300"
            >
              Wolf Den<span className="text-[#A68A64]">.</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.path;
                return (
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                            isActive ? "text-[#A68A64]" : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {link.name}
                      {/* Subtle animated underline */}
                      <span
                          className={`absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#A68A64] transition-all duration-300 -translate-x-1/2 ${
                              isActive ? "w-full" : "group-hover:w-1/2"
                          }`}
                      />
                    </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
                className="lg:hidden text-white hover:text-[#A68A64] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
            className={`fixed inset-0 z-40 bg-[#121212] transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-8">
            {navLinks.map((link, index) => (
                <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-white hover:text-[#A68A64] transition-colors duration-300 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {link.name}
                </Link>
            ))}
          </div>
        </div>
      </>
  );
}