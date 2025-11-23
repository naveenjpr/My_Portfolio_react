// import axios from "axios"
// import React from "react"
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
// import { toast, ToastContainer } from "react-toastify"

// export default function Contact() {
//   let MailSend = (event) => {
//     event.preventDefault()
//     let dataSave = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       mobile: event.target.mobile.value,
//       message: event.target.message.value,
//     }

//     axios
//       .post(
//         "https://node-j-my-portfolio-mail-send.onrender.com/api/frontend/users/send-mail",
//         dataSave
//       )
//       .then((result) => {
//         toast.success(result.data.message, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "colored",
//         })
//         console.log(result.data.message)
//       })
//       .catch((err) => {
//         console.error("Axios Error:", err)
//         toast.error("❌ Failed to send email. Please try again.", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "colored",
//         })
//       })
//     event.target.reset()
//   }
//   return (
//     <div className="w-[90%] lg:w-[80%] mx-auto px-4">
//       <ToastContainer /> {/* ✅ Toastify Component */}
//       <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-8">
//         {/* Contact Form */}
//         <form
//           className="bg-white p-8 rounded-lg shadow-lg text-[black]"
//           onSubmit={MailSend}
//         >
//           <div className="mb-4">
//             <label className="block text-lg mb-2 text-gray-800">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2 text-gray-800">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2 text-gray-800">phone</label>
//             <input
//               type="text"
//               name="mobile"
//               className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Your phone"
//               maxLength="12"
//               required
//               onInput={(e) => {
//                 e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12)
//               }}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2 text-gray-800">Message</label>
//             <textarea
//               className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="5"
//               name="message"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Complementary Section */}
//         <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">
//             What's Your Story?
//           </h3>
//           {/* Address */}
//           <div className="flex items-center text-lg text-gray-600 mb-4">
//             <FaMapMarkerAlt className="mr-1 text-blue-500 w-[50px]" />{" "}
//             {/* Address icon */}
//             <p>
//               H.No. 3583 Govind Rao Ji Ka Rasta,4 crossing ,infornt of narsingh
//               bhawan, Chandpole bazaar, Pink City, Jaipur, Rajasthan 302001
//             </p>
//           </div>

//           {/* Email */}
//           <div className="flex items-center text-lg text-gray-600 mb-4">
//             <FaEnvelope className="mr-2 text-blue-500" /> {/* Email icon */}
//             <a
//               href="mailto:naveensainijpr@gmail.com"
//               className="hover:text-blue-500"
//             >
//               naveensainijpr@gmail.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center text-lg text-gray-600 mb-6">
//             <FaPhoneAlt className="mr-2 text-blue-500" /> {/* Phone icon */}
//             <a href="tel:8619916687" className="hover:text-blue-500">
//               8619916687
//             </a>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="https://wa.me/8619916687" // Replace with your full WhatsApp number including country code
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
//             >
//               <img
//                 src="https://img.icons8.com/color/48/000000/whatsapp.png"
//                 alt="WhatsApp"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/naveen-saini-78201a293/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               <img
//                 src="https://img.icons8.com/color/48/000000/linkedin.png"
//                 alt="LinkedIn"
//                 className="w-6 h-6"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import axios from "axios"
import React, { useState } from "react"
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaUser,
  FaComment
} from "react-icons/fa"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const MailSend = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    let dataSave = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    }

    try {
      const result = await axios.post(
        "https://node-j-my-portfolio-mail-send.onrender.com/api/frontend/users/send-mail",
        dataSave
      )

      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: ""
      })
    } catch (err) {
      console.error("Axios Error:", err)
      toast.error("❌ Failed to send email. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12 px-4">
      <ToastContainer />

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <FaPaperPlane className="text-white text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Send Message
            </h3>
          </div>

          <form onSubmit={MailSend}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <FaUser className="inline mr-2 text-blue-500" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <FaEnvelope className="inline mr-2 text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <FaPhoneAlt className="inline mr-2 text-blue-500" />
                  Phone Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="+91 1234567890"
                  maxLength="12"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12)
                  }}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <FaComment className="inline mr-2 text-blue-500" />
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                rows="6"
                placeholder="Tell me about your project, ideas, or just say hello..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-xl" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Get in Touch Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always excited to hear about new projects and opportunities.
              Whether you need a website, web application, or just want to connect,
              feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    H.No. 3583 Govind Rao Ji Ka Rasta, 4th Crossing,<br />
                    In front of Narsingh Bhawan, Chandpole Bazaar,<br />
                    Pink City, Jaipur, Rajasthan 302001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:naveensainijpr@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    naveensainijpr@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:8619916687"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 8619916687
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Let's Connect Socially
            </h3>
            <div className="flex justify-center space-x-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918619916687"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
              >
                <FaWhatsapp className="text-white text-2xl group-hover:animate-bounce" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/naveen-saini-78201a293/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
              >
                <FaLinkedin className="text-white text-2xl group-hover:animate-bounce" />
              </a>

              {/* Email */}
              <a
                href="mailto:naveensainijpr@gmail.com"
                className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
              >
                <FaEnvelope className="text-white text-2xl group-hover:animate-bounce" />
              </a>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quick responses guaranteed! 🚀
              </p>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">Quick Response</h4>
            <p className="text-blue-100">
              I typically respond within 2-4 hours during business days
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="text-center mt-16">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full"></div>
        <p className="text-gray-500 dark:text-gray-400 mt-6">
          Made with ❤️ by Naveen Saini
        </p>
      </div>
    </div>
  )
}