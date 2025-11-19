import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import Link from "next/link"; // Uncomment for Next.js
// import { useRouter } from "next/router"; // Uncomment for Next.js

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState("/");

    // Mock router for preview environment
    // const router = useRouter();

    useEffect(() => {
        // Set current path for active state styling in preview
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Menu", path: "/menu" },
        { name: "The Lounge", path: "/about" },
        {name: "Staff", path: "/staff" },
        { name: "Events", path: "/events" },
        { name: "Reserve", path: "/contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
                    scrolled || isOpen
                        ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl md:text-3xl font-serif text-white tracking-tight hover:text-[#A68A64] transition-colors duration-300"
                    >
                        Wolf Den<span className="text-[#A68A64]">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = currentPath === link.path;
                            return (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                                        isActive ? "text-[#A68A64]" : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                    {/* Elegant Underline Animation */}
                                    <span
                                        className={`absolute -bottom-2 left-1/2 h-[1px] bg-[#A68A64] transition-all duration-300 -translate-x-1/2 ${
                                            isActive ? "w-full" : "w-0 group-hover:w-1/2"
                                        }`}
                                    />
                                </a>
                            );
                        })}

                        {/*/!* CTA Button in Nav *!/*/}
                        {/*<a*/}
                        {/*    href="/menu"*/}
                        {/*    className="ml-4 px-6 py-2 border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white hover:bg-[#A68A64] hover:border-[#A68A64] hover:text-black transition-all duration-300"*/}
                        {/*>*/}
                        {/*    Menu*/}
                        {/*</a>*/}
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
                className={`fixed inset-0 z-40 bg-[#121212] flex flex-col justify-center items-center space-y-8 transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {navLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-serif text-white hover:text-[#A68A64] transition-colors duration-300 opacity-0 animate-fade-up"
                        style={{ animationDelay: `${index * 100 + 100}ms`, animationFillMode: 'forwards' }}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    );
}