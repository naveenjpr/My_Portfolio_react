import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#facf21] py-1">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#241d05]">My Portfolio</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#241d05] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:static bg-[#facf21] md:bg-transparent w-full md:w-auto left-0 px-4 md:px-0 top-16 md:top-0 pb-4 md:pb-0 z-10`}
        >
          <li>
            <a
              href="#home"
              className="block py-2 text-[#241d05] hover:text-[#4a3f0a] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 text-[#241d05] hover:text-[#4a3f0a] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="block py-2 text-[#241d05] hover:text-[#4a3f0a] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 text-[#241d05] hover:text-[#4a3f0a] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
