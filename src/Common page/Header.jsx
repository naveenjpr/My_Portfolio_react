import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <FaUser className="w-4 h-4" /> },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <FaBriefcase className="w-4 h-4" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-900/95 dark:bg-blue-950/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20"
          : "bg-gradient-to-b from-blue-900/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                Naveen Saini
              </h1>
              <p className="text-xs text-blue-200/80 -mt-0.5 group-hover:text-blue-100 transition-colors">
                Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "text-blue-100 hover:bg-blue-800/50 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 ml-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-xl bg-blue-800/50 text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-300 group"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <FaSun className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                ) : (
                  <FaMoon className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                )}
              </button>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 transform hover:scale-105 transition-all duration-300 group"
              >
                <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm font-medium">Resume</span>
              </a>

              {/* Hire Me Button */}
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transform hover:scale-105 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
              >
                Hire Me
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-xl bg-blue-800/50 text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="w-4 h-4" />
              ) : (
                <FaMoon className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden  transition-all duration-500 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-blue-950/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl shadow-blue-500/20 transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full ">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-blue-700/50">
              <a
                href="#home"
                className="flex items-center gap-3 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">N</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Naveen Saini
                  </h2>
                  <p className="text-xs text-blue-200">Full Stack Developer</p>
                </div>
              </a>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-700/50 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6 bg-blue-700">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 group ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "text-blue-100 hover:bg-blue-700/50 hover:text-white"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activeSection === item.id
                            ? "bg-blue-500"
                            : "bg-blue-700/50 group-hover:bg-blue-600"
                        }`}
                      >
                        {item.icon}
                      </div>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Action Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  <FaDownload className="w-4 h-4" />
                  <span className="font-medium">Download Resume</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className="block w-full text-center px-4 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transform hover:scale-105 transition-all duration-300"
                >
                  Hire Me
                </a>
              </div>
            </nav>

            {/* Footer */}
            <footer className="p-6 border-t border-blue-700/50">
              <p className="text-center text-sm text-blue-300">
                © {new Date().getFullYear()} Naveen Saini. All rights reserved.
              </p>
            </footer>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
