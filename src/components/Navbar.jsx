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


//  <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 shadow-lg">
//       <div className="mx-auto flex h-[60px] items-center justify-between max-w-screen-xl px-6">
//         {/* Logo */}
//         <div className="flex items-center text-darkred font-bold text-2xl tracking-wide gap-2 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
//           <Briefcase className="w-6 h-6 text-darkred" />
//           <span>BizVine</span>
//         </div>
// .dashboard-container {
//   padding: 3rem 2rem;
//   max-width: 1000px;
//   margin: auto;
//   text-align: center;
// }

// .quiz-buttons {
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   gap: 1.5rem;
//   margin-top: 2rem;
// }

// .quiz-buttons a button {
//   padding: 1rem 2rem;
//   min-width: 200px;
//   font-size: 1.1rem;
//   background-color: var(--palevioletred);
//   border-radius: 10px;
//   border: none;
//   color: white;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// }

// .quiz-buttons a button:hover {
//   background-color: var(--darkred);
//   transform: translateY(-3px);
// }

// .quiz-buttons a {
//   text-decoration: none;
// }
