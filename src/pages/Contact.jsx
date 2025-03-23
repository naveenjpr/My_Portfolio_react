import React from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-8">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg mb-2 text-gray-800">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-gray-800">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-gray-800">Message</label>
            <textarea
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Complementary Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            What's Your Story?
          </h3>
          {/* Address */}
          <div className="flex items-center text-lg text-gray-600 mb-4">
            <FaMapMarkerAlt className="mr-1 text-blue-500 w-[50px]" />{" "}
            {/* Address icon */}
            <p>
              H.No. 3583, Govind Rai Ji Ka Rasta, 4 Crossing, Chandpole Bazar,
              Jaipur - 302001
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center text-lg text-gray-600 mb-4">
            <FaEnvelope className="mr-2 text-blue-500" /> {/* Email icon */}
            <a
              href="mailto:naveensainijpr@gmail.com"
              className="hover:text-blue-500"
            >
              naveensainijpr@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center text-lg text-gray-600 mb-6">
            <FaPhoneAlt className="mr-2 text-blue-500" /> {/* Phone icon */}
            <a href="tel:8619916687" className="hover:text-blue-500">
              8619916687
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://web.whatsapp.com/" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-saini-78201a293/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
