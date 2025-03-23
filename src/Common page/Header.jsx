import React from "react"

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a href="#home" className="text-[15px] font-bold text-gray-800">
              My Portfolio
            </a>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-500">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
            {/* CV Download Button */}
            <a
              href="path/to/your-cv.pdf"
              download
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Download CV
            </a>
          </nav>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
