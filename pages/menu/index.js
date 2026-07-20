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

const menuItems = {
  Whiskey: [
    {
      name: "Red Label",
      options: [
        { label: "Bottle", price: "6,500 birr" },
        { label: "30ml", price: "325 birr" },
        { label: "50ml", price: "542 birr" },
      ],
    },
    {
      name: "Black Label",
      options: [
        { label: "Bottle", price: "9,300 birr" },
        { label: "30ml", price: "465 birr" },
        { label: "50ml", price: "775 birr" },
      ],
    },
    {
      name: "Gold Label",
      options: [
        { label: "Bottle", price: "23,600 birr" },
        { label: "30ml", price: "1,180 birr" },
        { label: "50ml", price: "1,967 birr" },
      ],
    },
    {
      name: "Blue Label",
      options: [
        { label: "Bottle", price: "60,000 birr" },
        { label: "30ml", price: "3,000 birr" },
        { label: "50ml", price: "5,000 birr" },
      ],
    },
  ],
  Wine: [
    {
      name: "The Prince",
      note: "Wine of South Africa",
      price: "4,000 birr",
    },
    { name: "Gouder Red Wine", price: "1,500 birr" },
    { name: "Acacia", note: "Medium Sweet Red", price: "1,500 birr" },
    { name: "Acacia", note: "Medium Sweet White", price: "1,500 birr" },
  ],
  Beer: [
    { name: "Heineken Beer", price: "200 birr" },
    { name: "St. George Beer", price: "200 birr" },
  ],
  "House Cocktails": [
    { name: "The Den’s Embrace", price: "900 birr" },
    { name: "Whiskey Sour", price: "1,000 birr" },
  ],
  "Non-Alcoholic": [
    { name: "Coca-Cola", price: "100 birr" },
    { name: "Sprite", price: "100 birr" },
    { name: "Water", price: "100 birr" },
    { name: "Ambo Water", price: "100 birr" },
    { name: "Tea", price: "150 birr" },
    { name: "Coffee", price: "150 birr" },
  ],
};

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

      <main className="bg-black min-h-screen py-12 flex flex-col">
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
                  <div className="divide-y divide-gray-700">
                    {menuItems[category].map((item, itemIndex) => (
                      <div
                        key={`${item.name}-${item.note || itemIndex}`}
                        className="py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <h2 className="text-lg font-semibold text-white">
                              {item.name}
                            </h2>
                            {item.note && (
                              <p className="mt-1 text-sm text-gray-400">
                                {item.note}
                              </p>
                            )}
                          </div>
                          {item.price && (
                            <p className="shrink-0 font-semibold text-green-500">
                              {item.price}
                            </p>
                          )}
                        </div>

                        {item.options && (
                          <div className="mt-3 space-y-2">
                            {item.options.map((option) => (
                              <div
                                key={option.label}
                                className="flex items-center justify-between gap-6 text-sm"
                              >
                                <span>{option.label}</span>
                                <span className="font-semibold text-green-500">
                                  {option.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-16 px-4 flex flex-col items-center text-center mb-24">
          <p className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-green-600">
            Wolf Den
          </p>
          <p className="mt-1 text-xs font-semibold tracking-[0.35em] text-white">
            CIGAR LOUNGE
          </p>
        </div>
      </main>
    </div>
  );
};

export default Menu;
