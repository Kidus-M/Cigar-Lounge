const AboutPreview = () => (
    <section className="relative w-full py-24 md:py-32 bg-[#1E1E1E] overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center animate-fade-up">
          <span className="text-[#A68A64] uppercase tracking-[0.3em] text-sm font-semibold">Our Philosophy</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-serif text-white text-balance drop-shadow-lg">
            The <span className="text-[#A68A64] italic font-light">Wolf Den</span> Story
          </h2>
        </div>

        {/* Text Below Heading */}
        <div
            className="mt-12 text-center max-w-4xl text-white animate-fade-up delay-200"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            At <strong className="text-white font-medium">Wolf Den</strong>, we are excited to introduce the first premiere cigar lounge in Ethiopia. We strive to create a hidden upscale environment where our clients can escape into seclusion. Come join us and allow us to provide you with a tranquil atmosphere, fine service, and premier drinks complemented by our world-class cigar collection. <span className="text-[#A68A64] italic">Welcome to the Wolf Den!</span>
          </p>
        </div>

        {/* Image Grid - Converted to standard <img> with remote URLs */}
        <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-fade-up delay-300"
        >
          {/* First Image */}
          <div className="relative h-[300px] group overflow-hidden rounded-xl shadow-2xl border border-white/5">
            <img
                src="https://images.unsplash.com/photo-1596708304910-410a0e5b8e97?q=80&w=2670&auto=format&fit=crop"
                alt="Elegant lounge interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Second Image (Bar/Cocktails) */}
          <div className="relative h-[300px] group overflow-hidden rounded-xl shadow-2xl border border-white/5">
            <img
                src="https://images.unsplash.com/photo-1594917452661-8e0f59ef278a?q=80&w=2670&auto=format&fit=crop"
                alt="Premium cocktails served"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Third Image (Seating/Cigars) */}
          <div className="relative h-[300px] group overflow-hidden rounded-xl shadow-2xl border border-white/5">
            <img
                src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2574&auto=format&fit=crop"
                alt="Luxurious seating area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>
        </div>

      </div>
    </section>
);

export default AboutPreview