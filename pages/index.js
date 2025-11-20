import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
// Ensure these exist
import DrinkMenu from "../components/DrinkMenu"; // Ensure these exist
   // Ensure these exist


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


      </div>
  );
}