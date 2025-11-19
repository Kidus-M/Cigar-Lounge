import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]">

            {/* 1. Background Image with Parallax-like feel */}
            {/* Use a placeholder for now: A dark moody cigar lounge texture */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[kenburns_20s_infinite_alternate]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1525538465038-f02733205657?q=80&w=2574&auto=format&fit=crop')",
                    filter: "brightness(0.6)"
                }}
            >
                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#121212]" />
            </div>

            {/* 2. Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">

                {/* Small pre-header */}
                <span className="text-[#A68A64] uppercase tracking-[0.25em] text-sm font-medium opacity-0 animate-fade-up">
          Est. 2024 • Addis Ababa
        </span>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] opacity-0 animate-fade-up delay-100">
                    Timeless <span className="italic text-white/90">Elegance</span> <br />
                    Modern <span className="italic text-[#A68A64]">Comfort</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg leading-relaxed opacity-0 animate-fade-up delay-200 text-balance">
                    Curated spirits, premium cigars, and an atmosphere designed for the sophisticated palate.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-4 opacity-0 animate-fade-up delay-300">
                    <Link
                        href="/menu"
                        className="px-8 py-4 bg-[#A68A64] text-black text-sm uppercase tracking-widest font-semibold hover:bg-[#C4AA88] transition-all duration-300"
                    >
                        View The Menu
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Reserve a Table
                    </Link>
                </div>
            </div>

            {/* 3. Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[3000ms]">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </div>

        </section>
    );
}