// import React, { useState } from "react"
// import { FaBars, FaTimes } from "react-icons/fa"

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className="">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isMenuOpen ? (
//             <FaTimes className="w-6 h-6" />
//           ) : (
//             <FaBars className="w-6 h-6" />
//           )}
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`${isMenuOpen ? "block" : "hidden"
//             } md:flex md:space-x-4 absolute md:static  md:bg-transparent w-full md:w-auto left-0 px-4 md:px-0 top-16 md:top-0 pb-4 md:pb-0 z-10`}
//         >
//           <li>
//             <a
//               href="#home"
//               className="block py-2 text-white hover:text-[#4a3f0a] transition-colors font-bold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="block py-2 text-white hover:text-[#4a3f0a] transition-colors font-bold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#portfolio"
//               className="block py-2 text-white hover:text-[#4a3f0a] transition-colors font-bold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Portfolio
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="block py-2 text-white hover:text-[#4a3f0a] transition-colors font-bold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   )
// }

// export default Header

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <header className="sticky top-0 z-30">
      {/* translucent, blurred bar */}
      <div className="backdrop-blur-sm bg-white/6 border-b border-white/8">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* small mark + name */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-600 shadow-md">
              <span className="text-sm font-extrabold text-black">N</span>
            </span>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-white/95">
                My Portfolio
              </h1>
              <p className="text-xs text-white/60 -mt-0.5 tracking-wide">
                <span className="text-yellow-300">●</span> MERN Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop nav + CTA */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="relative inline-block py-2 text-sm font-medium text-white/95 hover:text-yellow-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    {/* underline indicator */}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-semibold text-black shadow hover:scale-105 transform transition"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/4 text-white hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel (animated) */}
      <div
        className={`fixed inset-0 z-20 md:hidden transform transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isMenuOpen}
      >
        {/* backdrop */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden="true"
        />

        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-11/12 max-w-xs bg-[#0b0b0d]/95 p-6 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-6">
            <a href="#home" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500">
                <span className="text-sm font-extrabold text-black">N</span>
              </span>
              <div>
                <h2 className="text-base font-semibold text-white">My Portfolio</h2>
                <p className="text-xs text-white/60 -mt-0.5">Frontend Dev</p>
              </div>
            </a>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-white/95 text-base font-medium hover:bg-white/6 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-center font-semibold text-black shadow"
              >
                Hire Me
              </a>
            </div>
          </nav>

          <footer className="absolute bottom-6 left-6 right-6 text-xs text-white/60">
            <p>© {new Date().getFullYear()} My Portfolio • Built with React</p>
          </footer>
        </aside>
      </div>
    </header>
  );
};

export default Header;

