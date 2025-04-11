import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import the Menu and X icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerColor = "var(--darkred)"; // Or any other color you prefer

  return (
    <nav className="bg-lightpink w-full py-4 px-8 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-darkred font-bold text-3xl tracking-wide">
        BizVine
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-20">
        <a href="/" className="text-darkred hover:text-palevioletred text-lg font-medium transition-colors">Dashboard</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <X className="w-6 h-6" color={hamburgerColor} />
          ) : (
            <Menu className="w-6 h-6" color={hamburgerColor} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a href="#" className="text-darkred hover:text-palevioletred text-lg font-medium transition-colors block">Dashboard</a>
          <a href="#" className="text-darkred hover:text-palevioletred text-lg font-medium transition-colors block">Subjects</a>
        </div>
      )}
    </nav>
  );
}