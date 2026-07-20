import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const menuItems = [
  {
    name: "Johnnie Walker Black Label",
    description: "A smooth blended Scotch with rich fruit, vanilla, and smoky notes.",
    category: "Whiskey",
    imageUrl: "/old-fashioned.jpeg",
    price: 750,
  },
  {
    name: "Jack Daniel's Old No. 7",
    description: "A mellow Tennessee whiskey with caramel, oak, and toasted vanilla.",
    category: "Whiskey",
    imageUrl: "/BourbonFlip.jpg",
    price: 700,
  },
  {
    name: "Jameson Irish Whiskey",
    description: "A balanced Irish whiskey with light floral and warm spice notes.",
    category: "Whiskey",
    imageUrl: "/whiskey-sour.jpg",
    price: 650,
  },
  {
    name: "Nederburg Cabernet Sauvignon",
    description: "A full-bodied red wine with dark fruit and gentle oak character.",
    category: "Wine",
    imageUrl: "/menu-wine.png",
    price: 800,
  },
  {
    name: "Four Cousins Sweet Red",
    description: "A soft, fruity red wine with a smooth and pleasantly sweet finish.",
    category: "Wine",
    imageUrl: "/menu-wine.png",
    price: 650,
  },
  {
    name: "Tall Horse Chardonnay",
    description: "A refreshing white wine with tropical fruit and citrus flavors.",
    category: "Wine",
    imageUrl: "/menu-wine.png",
    price: 750,
  },
  {
    name: "St. George",
    description: "A crisp Ethiopian lager with a clean, refreshing finish.",
    category: "Beer",
    imageUrl: "/menu-beer.png",
    price: 200,
  },
  {
    name: "Habesha",
    description: "A smooth Ethiopian beer with a balanced malt and hop profile.",
    category: "Beer",
    imageUrl: "/menu-beer.png",
    price: 200,
  },
  {
    name: "Heineken",
    description: "A light-bodied premium lager with a crisp, subtly bitter finish.",
    category: "Beer",
    imageUrl: "/menu-beer.png",
    price: 300,
  },
  {
    name: "Classic Mojito",
    description: "Rum mixed with fresh lime, mint, sugar, and soda.",
    category: "House Cocktails",
    imageUrl: "/mojito.jpg",
    price: 450,
  },
  {
    name: "Margarita",
    description: "Tequila, triple sec, fresh lime juice, and a salted rim.",
    category: "House Cocktails",
    imageUrl: "/margarita.jpg",
    price: 500,
  },
  {
    name: "Whiskey Sour",
    description: "Whiskey shaken with fresh lime juice and simple syrup.",
    category: "House Cocktails",
    imageUrl: "/whiskey-sour.jpg",
    price: 550,
  },
  {
    name: "Passion Mint Cooler",
    description: "Passion fruit, fresh mint, citrus, and sparkling water.",
    category: "Non-Alcoholic",
    imageUrl: "/menu-non-alcoholic.png",
    price: 300,
  },
  {
    name: "Virgin Mojito",
    description: "Fresh lime and mint muddled with sugar and soda water.",
    category: "Non-Alcoholic",
    imageUrl: "/menu-non-alcoholic.png",
    price: 280,
  },
  {
    name: "Fresh Lime Soda",
    description: "Freshly squeezed lime balanced with chilled sparkling water.",
    category: "Non-Alcoholic",
    imageUrl: "/menu-non-alcoholic.png",
    price: 220,
  },
];

const categories = [
  "All",
  "Whiskey",
  "Wine",
  "Beer",
  "House Cocktails",
  "Non-Alcoholic",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Wolf Den Lounge - Menu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-black min-h-screen py-12">
        <div className="px-4 text-center">
          <p className="text-xl font-bold tracking-wide text-green-600 uppercase">
            Wolf Den Lounge
          </p>
          <h1 className="text-4xl font-bold text-white mt-4">Our Menu</h1>
          <p className="text-gray-300 mt-3">
            A curated reference selection of popular favorites.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-8 px-4">
          {categories.map((category) => (
            <button
              key={category}
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {filteredItems.map((item) => (
            <article
              key={item.name}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-600">
                  {item.name}
                </h2>
                <p className="text-gray-300 mt-2">{item.description}</p>
                <p className="text-green-500 mt-2">Price: {item.price} ETB</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
