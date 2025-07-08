import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useState} from "react";
import Head from "next/head";

const drinks = [
  {
    name: "Classic Mojito",
    description: "Rum infused with fresh lime, mint and sugar.",
    imageUrl: "/mojito.jpg",
    price: 355,
    category: "Cocktails",
  },
  {
    name: "Royal Martini",
    description: "Freshly brewed espresso mixed with rum and lime.",
    imageUrl: "/martini.jpg",
    price: 1100,
    category: "Cocktails",
  },
  {
    name: "Margarita",
    description: "Tequila, triple sek, lime juice, salt.",
    imageUrl: "/margarita.jpg",
    price: 1890,
    category: "Cocktails",
  },
  {
    name: "Daiquiri",
    description: "Rum, lemon juice and sugar mixed with apple.",
    imageUrl: "/daiquiri.jpg",
    price: 900,
    category: "Cocktails",
  },
  {
    name: "Gin Sour",
    description: "Gin, lime juice, sugar syrup.",
    imageUrl: "/gin-and-tonic.jpg",
    price: 455,
    category: "Cocktails",
  },
  {
    name: "Manhattan",
    description: "White rum mixed with whiskey and sugar.",
    imageUrl: "/manhattan.jpg",
    price: 950,
    category: "Whiskey Cocktails",
  },
  {
    name: "Whiskey Sour",
    description: "Whisky, lime juice, sugar syrup, 1 white egg.",
    imageUrl: "/whiskey-sour.jpg",
    price: 575,
    category: "Whiskey Cocktails",
  },
  {
    name: "Bourbon Flip",
    description: "Premium whiskey, lime mixed with sugar syrup.",
    imageUrl: "/BourbonFlip.jpg",
    price: 535,
    category: "Whiskey Cocktails",
  },
  {
    name: "Old Fashioned",
    description: "Brown sugar, lime and sugar mixed with whiskey.",
    imageUrl: "/old-fashioned.jpeg",
    price: 589,
    category: "Whiskey Cocktails",
  },
  {
    name: "Paper Plane",
    description: "Premium whiskey mixed with lime and sugar.",
    imageUrl: "/negroni.jpg",
    price: 538,
    category: "Whiskey Cocktails",
  },
  {
    name: "Blue Ocean",
    description: "Blue curaçao, lime juice, sprite, triple sek.",
    imageUrl: "/BlueOcean.jpg",
    price: 800,
    category: "Weekend Special",
  },
];

const Menu = () => {
  const categories = ["All", "Cocktails", "Whiskey Cocktails", "Weekend Special"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDrinks = selectedCategory === "All"
      ? drinks
      : drinks.filter(drink => drink.category === selectedCategory);

  return (
      <div className="mt-20">
        <Head>
          <title>WolfDen Lounge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="bg-black min-h-screen flex flex-col justify-center py-12">
          <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
            Our Full Drink Menu
          </h2>
          <div className="flex justify-center mb-8 space-x-4">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-800 text-green-600'}`}
                >
                  {category}
                </button>
            ))}
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {filteredDrinks.map((drink) => (
                <div
                    key={drink.name}
                    className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                >
                  <div className="relative h-64">
                    <Image
                        src={drink.imageUrl}
                        alt={drink.name}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 hover:opacity-100 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-600">
                      {drink.name}
                    </h3>
                    <p className="text-gray-300 mt-2">{drink.description}</p>
                    {/*<p className="text-green-600 mt-2">Price: {drink.price} ETB</p>*/}
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Menu;