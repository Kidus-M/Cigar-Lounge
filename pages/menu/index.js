// components/Menu.js
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const drinks = [
  {
    name: "Classic Old Fashioned",
    description: "A timeless cocktail with bourbon, bitters, and a hint of citrus.",
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
    description: "A sophisticated combination of rye whiskey, sweet vermouth, and bitters.",
    imageUrl: "/manhattan.jpg",
  },
  {
    name: "Margarita",
    description: "A classic cocktail with tequila, lime juice, and triple sec.",
    imageUrl: "/margarita.jpg",
  },
  {
    name: "Mojito",
    description: "A refreshing mix of white rum, mint, lime, sugar, and soda water.",
    imageUrl: "/mojito.jpg",
  },
  {
    name: "Martini",
    description: "A classic cocktail with gin and dry vermouth, garnished with an olive or lemon twist.",
    imageUrl: "/martini.jpg",
  },
  {
    name: "Cosmopolitan",
    description: "A stylish cocktail with vodka, triple sec, cranberry juice, and lime juice.",
    imageUrl: "/cosmopolitan.jpg",
  },
  {
    name: "Pina Colada",
    description: "A tropical blend of rum, coconut cream, and pineapple juice.",
    imageUrl: "/pina-colada.jpg",
  },
  {
    name: "Daiquiri",
    description: "A simple yet delicious mix of rum, lime juice, and sugar.",
    imageUrl: "/daiquiri.jpg",
  },
  {
    name: "Bloody Mary",
    description: "A savory cocktail with vodka, tomato juice, and various spices and flavorings.",
    imageUrl: "/bloody-mary.jpg",
  },
  {
    name: "Mai Tai",
    description: "A tropical cocktail with rum, lime juice, orgeat syrup, and green liqueur.",
    imageUrl: "/mai-tai.jpg",
  },
  {
    name: "Gin and Tonic",
    description: "A simple and refreshing mix of gin and tonic water, garnished with lime.",
    imageUrl: "/gin-and-tonic.jpg",
  },
  {
    name: "Sazerac",
    description: "A classic New Orleans cocktail with rye whiskey, absinthe, and bitters.",
    imageUrl: "/sazerac.jpg",
  },
  {
    name: "Mint Julep",
    description: "A refreshing cocktail with bourbon, mint, sugar, and water.",
    imageUrl: "/mint-julep.jpg",
  },
  {
    name: "Paloma",
    description: "A Mexican cocktail with tequila, grapefruit soda, and lime juice.",
    imageUrl: "/paloma.jpg",
  },
  {
    name: "French 75",
    description: "A sophisticated cocktail with gin, champagne, lemon juice, and sugar.",
    imageUrl: "/french-75.jpg",
  },
  {
    name: "Tom Collins",
    description: "A refreshing mix of gin, lemon juice, sugar, and carbonated water.",
    imageUrl: "/tom-collins.jpg",
  },
  {
    name: "Sidecar",
    description: "A classic cocktail with cognac, green liqueur, and lemon juice.",
    imageUrl: "/sidecar.jpg",
  },
  {
    name: "Aperol Spritz",
    description: "A light and refreshing cocktail with Aperol, prosecco, and soda water.",
    imageUrl: "/aperol-spritz.jpg",
  },
];

const Menu = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col justify-center py-12">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
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
                <h3 className="text-xl font-semibold text-green-600">
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
