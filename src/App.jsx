import React, { useState, useEffect } from "react"
import Portfolio from "./pages/Portfolio"
import Footer from "./Common page/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { FaSmile, FaArrowDown, FaStar } from "react-icons/fa"
import Header from "./Common page/Header"

const App = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-blue-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50">
        <Header />
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 pt-16 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center p-8 relative z-10 max-w-4xl mx-auto">
          {/* Profile Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-blue-100 text-sm font-medium">Full Stack Developer</span>
            <FaStar className="text-yellow-400 text-sm" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to My <span className="block mt-2">Portfolio</span>
          </h1>

          {/* Personal Introduction */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 shadow-2xl shadow-blue-500/20">
            <p className="text-2xl md:text-3xl text-white mb-4 flex items-center justify-center gap-3">
              Hi There, I'm <span className="font-bold text-cyan-300">Naveen Saini</span>
              <FaSmile className="text-yellow-400 animate-bounce" />
            </p>
            <p className="text-xl text-blue-100 mb-4">
              Passionate <span className="text-cyan-300 font-semibold">MERN Stack Developer</span> &
              <span className="text-cyan-300 font-semibold"> AWS Specialist</span>
            </p>
            <p className="text-lg text-blue-200 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Based in Rajasthan, Jaipur
            </p>
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['React.js', 'Node.js', 'MongoDB', 'AWS', 'Tailwind', 'Express'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium hover:bg-blue-500/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              View My Work
              <FaArrowDown className="text-sm" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 pt-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <About />
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-br from-blue-900/95 to-blue-800 dark:from-gray-900 dark:to-blue-950 pt-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent dark:from-gray-800/10"></div>
        <div className="absolute top-20 right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Portfolio />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/40 pt-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App