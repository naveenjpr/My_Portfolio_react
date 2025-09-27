import React from "react";
import image from "../assets/converted_1 (1).webp";
import certificateimage from "../assets/converted_4.webp";
import certificateimage2 from "../assets/converted_2.webp";
import certificateimage3 from "../assets/converted_3 (1).webp";
import resume from "../assets/new resume pdf (1).pdf";
import joinletter from "../assets/join letter_page-0001.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJs,
  FaWordpress,
  FaNodeJs,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiCurseforge,
  SiExpress,
  SiFirebase,
  SiGithubcopilot,
  SiMongoose,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import { BiBriefcase } from "react-icons/bi";
export default function About() {

  const experiences = [
    {
      role: "AWS Developer",
      company: "IPage UM Services Pvt Ltd (IPAGE UMS)",
      type: "Internship",
      duration: "Aug 2025 – Present · 2 mos",
      location: "Hyderabad, Telangana, India · Remote",
    },
    {
      role: "Next.js or React.js Developer",
      company: "Shape Multimedia",
      type: "Full-time",
      duration: "Sep 2024 – Aug 2025 · 1 yr",
      location: "Jaipur, Rajasthan, India · Hybrid",
    },
    {
      role: "MERN STACK Training",
      company: "WsCube Tech",
      type: "Self-employed",
      duration: "Feb 2023 – Mar 2025 · 2 yrs 2 mos",
      location: "Jaipur, Rajasthan, India · Remote",
    },
  ];
  return (
    <>
      <Skill />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col justify-start items-center">
          {/* Download CV Button */}
          <a
            href={resume} // Replace with the actual path to your CV file
            download="naveen_cv.pdf" // Replace with your desired file name
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Download My CV
          </a>
          {/* Image Section */}
          <img
            src={image} // Replace `image` with your actual image source
            alt="About Me"
            className="w-full max-w-md lg:max-w-full rounded-lg shadow-lg"
          />
          <div className="h-screen overflow-auto">
            <h2 className="text-center text-[black] font-medium py-[10px]">
              Our Certificate
            </h2>
            <img
              src={joinletter} // Replace `image` with your actual image source
              alt="About Me"
              className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
            />
            <img
              src={certificateimage} // Replace `image` with your actual image source
              alt="About Me"
              className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
            />
            <img
              src={certificateimage2} // Replace `image` with your actual image source
              alt="About Me"
              className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
            />
            <img
              src={certificateimage3} // Replace `image` with your actual image source
              alt="About Me"
              className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 text-[black]">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg">
            <p className="mb-6 text-center">
              Hi, I'm Naveen Saini, a full-stack developer with a passion for
              building modern web applications. I specialize in{" "}
              <strong>React.js, Node.js, Tailwind CSS, and AWS Lambda</strong>, and I have
              extensive experience in both <strong>MERN Stack</strong> and{" "}
              <strong>WordPress Development</strong>. I also work with{" "}
              <strong>REST APIs</strong> to create scalable and efficient solutions.
            </p>


            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🚀 My Expertise</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js)
                </li>
                <li>
                  <strong>WordPress Development</strong> (Custom Themes, Plugins, and Websites)
                </li>
                <li>
                  <strong>AWS Lambda</strong> (Serverless functions and cloud-based execution)
                </li>
                <li>
                  <strong>REST API</strong> (Designing and integrating scalable APIs)
                </li>
              </ul>

            </div>

            <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                📚 My Background & Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b pb-4 last:border-0"
                  >
                    <div className="p-2 rounded-lg bg-gray-100">
                      <BiBriefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-gray-700">
                        {exp.company} · {exp.type}
                      </p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

function Skill() {
  const skills = [
    {
      name: "Wordpress",
      icon: <FaWordpress className="text-white" size={40} />,
    },
    { name: "Html", icon: <FaHtml5 className="text-orange-600" size={40} /> },
    { name: "Css", icon: <FaCss3Alt className="text-blue-600" size={40} /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" size={40} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-500" size={40} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" size={40} />,
    },
    {
      name: "Jquery",
      icon: <DiJqueryLogo className="text-white animate-spin" size={40} />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400 animate-spin" size={40} />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-[white] " size={40} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-blue-400 " size={40} />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white" size={40} />,
    },

    {
      name: "MongoDB",
      icon: <DiMongodb className="text-[#00e661]" size={40} />,
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-[orange]" size={40} />,
    },
    {
      name: "Google Firebase",
      icon: <SiFirebase className="text-[orange]" size={40} />,
    },
    {
      name: "AWS Lambda & REST",
      icon: <FaAws className="text-white" size={40} />,
    },

    {
      name: "Vercel",
      icon: <RiVercelLine className="text-white" size={40} />,
    },
    {
      name: "Github",
      icon: <FaGithub className="text-white" size={40} />,
    },
    {
      name: "render",
      icon: <SiRender className="text-[white]" size={40} />,
    },
    {
      name: "Github Copilot",
      icon: <SiGithubcopilot className="text-[#25c5df]" size={40} />,
    },
    {
      name: "cursor ai",
      icon: <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cursor AI icon का SVG path यहां डालें */}
        <path d="M4 2L20 12L4 22L6 14L14 12L6 10L4 2Z" />
      </svg>
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-[#ed143d] text-center mb-4">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-2 text-sm text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
