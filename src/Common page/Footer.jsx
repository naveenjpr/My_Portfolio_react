import React from "react"

export default function Footer() {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center">
      <p>© 2023 My Portfolio. All rights reserved.</p>
      <div className="flex space-x-4">
        <a
          href="https://web.whatsapp.com/" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-saini-78201a293/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  )
}
