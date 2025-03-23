import React, { useState } from "react"
import Portfolio from "./pages/Portfolio"
import Footer from "./Common page/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { FaBars, FaTimes } from "react-icons/fa"
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="p-4 bg-indigo-800 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
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
            } md:flex md:space-x-4 absolute md:static bg-indigo-800 md:bg-transparent w-full md:w-auto left-0 px-4 md:px-0 top-16 md:top-0`}
          >
            <li>
              <a
                href="#home"
                className="block py-2 text-white hover:text-indigo-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-white hover:text-indigo-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 text-white hover:text-indigo-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-white hover:text-indigo-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-[#fee9e8] to-indigo-600"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-xl">
            I'm a passionate developer creating awesome things.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-teal-100">
        <About />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-amber-600">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-rose-600">
        <Contact />
      </section>

      {/* Footer with Social Icons */}
      <footer className="py-6 bg-indigo-800">
        <Footer />
      </footer>
    </div>
  )
}

export default App
