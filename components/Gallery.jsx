import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8 mt-30">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6">Experience the Elegance of WolfDen Cigar Lounge</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          A sophisticated ambiance, rich flavors, and the finest cigars. Explore our luxurious lounge through our gallery.
        </p>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/about1.jpeg"
            alt="Luxury cigar lounge seating"
            width={400}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/about2.jpeg"
            alt="Premium cigars display"
            width={400}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/about3.jpg"
            alt="Relaxing lounge area with drinks"
            width={400}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
