import { useState } from "react";
import Head from "next/head";

const categories = [
  "Whiskey",
  "Wine",
  "Beer",
  "House Cocktails",
  "Non-Alcoholic",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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

        <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-green-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
