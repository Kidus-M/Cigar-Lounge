import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <header className="w-full py-6 md:px-48 px-8 flex justify-between items-center bg-white relative">
      <Link to="/" className="text-3xl font-primary text-primary hover:text-secondary">Cigar Lounge</Link>
      <button
        className="text-black md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block absolute md:static top-16 left-1/2 transform -translate-x-1/2 font-secondary md:translate-x-0 w-full md:w-auto bg-white shadow-md md:shadow-none  md:items-center md:space-x-24 z-50`}
      >
        <Link
          to="/design"
          className="block md:inline-block text-black hover:text-primary transition-colors py-4 text-xl text-center md:text-base md:py-0"
        >
          Design
        </Link>
        <Link
          to="/dev"
          className="block md:inline-block text-black hover:text-primary transition-colors py-4 text-xl text-center md:text-base md:py-0"
        >
          Dev
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block text-black hover:text-primary transition-colors py-4 text-xl  text-center md:text-base md:py-0"
        >
          Let’s Talk
        </Link>
      </nav>
    </header>
    </React.Fragment>
  );
}

export default Navbar;
