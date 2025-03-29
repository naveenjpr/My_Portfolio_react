import React, { useState } from "react"
import Portfolio from "./pages/Portfolio"
import Footer from "./Common page/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { FaBars, FaSmile, FaTimes } from "react-icons/fa"
import Header from "./Common page/Header"
const App = () => {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="p-4 bg-indigo-800 fixed w-full top-0 z-50">
        <Header />
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center  justify-center bg-gradient-to-r from-[#fee9e8] to-indigo-600"
      >
        <div className="text-center p-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h2 className="text-5xl font-bold animate-fade-in">
            Welcome to My Portfolio
          </h2>
          <p className="mt-4 text-xl flex items-center justify-center animate-fade-in-delay">
            Hi There, I'm Naveen Saini <FaSmile className="ml-2" />
          </p>
          <p className="mt-2 text-lg text-indigo-200 animate-fade-in-delay-2">
            live in Rajasthan, Jaipur
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-teal-100">
        <About />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
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
