// components/Menu.js
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const drinks = [
  {
    name: "Classic Old Fashioned",
    description:
      "A timeless cocktail with bourbon, bitters, and a hint of citrus.",
    imageUrl: "/old-fashioned.jpeg",
  },
  {
    name: "Negroni",
    description: "A perfect blend of gin, Campari, and sweet vermouth.",
    imageUrl: "/negroni.jpg",
  },
  {
    name: "Whiskey Sour",
    description: "A refreshing mix of whiskey, lemon juice, and simple syrup.",
    imageUrl: "/whiskey-sour.jpg",
  },
  {
    name: "Manhattan",
    description:
      "A sophisticated combination of rye whiskey, sweet vermouth, and bitters.",
    imageUrl: "/manhattan.jpg",
  },
];

const Menu = () => {
  return (
    <div className="mt-10">
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col justify-center py-12">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Our Full Drink Menu
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {drinks.map((drink) => (
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
                <h3 className="text-xl font-semibold text-orange-600">
                  {drink.name}
                </h3>
                <p className="text-gray-300 mt-2">{drink.description}</p>
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
