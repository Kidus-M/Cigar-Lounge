import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
// Ensure these exist
import DrinkMenu from "../components/DrinkMenu"; // Ensure these exist
import Footer from "../components/Footer";    // Ensure these exist

// Temporary placeholders in case components don't exist yet
// const About = () => <div className="h-96 flex items-center justify-center bg-[#121212] text-white border-t border-white/10">About Section Placeholder</div>;
// const DrinkMenu = () => <div className="h-96 flex items-center justify-center bg-[#1E1E1E] text-white">Menu Section Placeholder</div>;
// const Footer = () => <div className="h-40 flex items-center justify-center bg-black text-gray-500">Footer Placeholder</div>;

export default function Home() {
  return (
      <div className="bg-[#121212] min-h-screen selection:bg-[#A68A64] selection:text-black">
        <Head>
          <title>Wolf Den Lounge | Premium Cigars & Spirits</title>
          <meta name="description" content="A modern sanctuary for cigar aficionados and spirit connoisseurs." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation is fixed, so it sits outside the flow logic usually,
          but handled inside the Navbar component styling */}
        <Navbar />

        <main>
          {/* The Hero Component now handles the top section completely */}
          <Hero />

          {/* Rest of the page content */}
          <div className="relative z-10 bg-[#121212]">
              <About />
              {/*<TextReveal />*/}
              {/*<Gallery />*/}
            <DrinkMenu />
          </div>
        </main>

        <Footer />
      </div>
  );
}