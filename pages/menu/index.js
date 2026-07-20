import { useState } from "react";
import Head from "next/head";
import { ChevronDown } from "lucide-react";

const categories = [
  "Whiskey",
  "Wine",
  "Beer",
  "House Cocktails",
  "Non-Alcoholic",
];

const Menu = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory((currentCategory) =>
      currentCategory === category ? null : category
    );
  };

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Wolf Den Lounge - Menu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-black min-h-screen py-12">
        <div className="px-4 text-center">
          
          <h1 className="text-4xl font-bold text-white mt-4">Menu</h1>
        </div>

        <div className="w-full max-w-xl mx-auto mt-10 px-4 space-y-4">
          {categories.map((category) => (
            <div key={category} className="w-full">
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                aria-expanded={openCategory === category}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-lg text-left text-lg font-semibold transition-colors duration-200 ${
                  openCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-green-600"
                }`}
              >
                <span>{category}</span>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-200 ${
                    openCategory === category ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openCategory === category && (
                <div className="mt-2 rounded-lg border border-green-600/30 bg-gray-900 px-6 py-5 text-left text-gray-300">
                  Menu selections coming soon.
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
