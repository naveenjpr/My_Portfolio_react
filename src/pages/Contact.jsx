import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaUser,
  FaComment,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  let baseUrl = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhoneNumber: "",
    yourMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const MailSend = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let dataSave = {
      yourName: formData.yourName,
      yourEmail: formData.yourEmail,
      yourPhoneNumber: formData.yourPhoneNumber,
      yourMessage: formData.yourMessage,
    };

    try {
      const result = await axios.post(
        `${baseUrl}/api/website/clientMessage/add`,
        dataSave,
      );

      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Reset form
      setFormData({
        yourName: "",
        yourEmail: "",
        yourPhoneNumber: "",
        yourMessage: "",
      });
    } catch (err) {
      console.error("Axios Error:", err);
      toast.error("❌ Failed to send email. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12 px-4">
      <ToastContainer />

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your project and
          create something amazing together.
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
                name="yourName"
                value={formData.yourName}
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
                  name="yourEmail"
                  value={formData.yourEmail}
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
                  name="yourPhoneNumber"
                  value={formData.yourPhoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="8619916687"
                  maxLength="12"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 12);
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
                name="yourMessage"
                value={formData.yourMessage}
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
              className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-600"
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

          <GetInTouch />
          {/* Social Links Section (Optional) */}
          <Social />
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
  );
}

function GetInTouch() {
  let baseUrl = import.meta.env.VITE_API_URL;

  const [connectme, setconnectme] = useState([]);

  // 🔥 API CALL
  useEffect(() => {
    axios
      .post(`${baseUrl}/api/backend/ConnectMe/view`)
      .then((res) => {
        setconnectme(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Get In Touch
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
        I'm always excited to hear about new projects and opportunities. Whether
        you need a website, web application, or just want to connect, feel free
        to reach out!
      </p>

      {connectme.map((item) => (
        <div key={item._id} className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                Address
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.Address}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                Email
              </h4>
              <a
                href={`mailto:${item.Email}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.Email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                Phone
              </h4>
              <a
                href={`tel:${item.Phone}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.Phone}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Social() {
  let baseUrl = import.meta.env.VITE_API_URL;

  const [social, setsocial] = useState([]);

  // 🔥 API CALL
  useEffect(() => {
    axios
      .post(`${baseUrl}/api/website/Social/view`)
      .then((res) => {
        setsocial(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Connect Socially
      </h3>
      <div className="flex space-x-6 justify-center">
        {social.length > 0
          ? social.map((v, i) => {
              return (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14  rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 hover:shadow-xl"
                >
                  <img
                    src={v.social_icon}
                    alt={v.social_name}
                    className="text-white text-2xl"
                  />
                </a>
              );
            })
          : "no data"}
      </div>
    </div>
  );
}
