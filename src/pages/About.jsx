// import React from "react";
// import image from "../assets/converted_1 (1).webp";
// import certificateimage from "../assets/converted_4.webp";
// import certificateimage2 from "../assets/converted_2.webp";
// import certificateimage3 from "../assets/converted_3 (1).webp";
// import resume from "../assets/new resume pdf (1).pdf";
// import joinletter from "../assets/join letter_page-0001.jpg";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
//   FaReact,
//   FaJs,
//   FaWordpress,
//   FaNodeJs,
//   FaAws,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiCurseforge,
//   SiExpress,
//   SiFirebase,
//   SiGithubcopilot,
//   SiMongoose,
//   SiRender,
//   SiTailwindcss,
// } from "react-icons/si";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { DiJqueryLogo, DiMongodb } from "react-icons/di";
// import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
// import { BiBriefcase } from "react-icons/bi";
// export default function About() {

//   const experiences = [
//     {
//       role: "AWS Developer",
//       company: "IPage UM Services Pvt Ltd (IPAGE UMS)",
//       type: "Internship",
//       duration: "Aug 2025 – Present · 2 mos",
//       location: "Hyderabad, Telangana, India · Remote",
//     },
//     {
//       role: "Next.js or React.js Developer",
//       company: "Shape Multimedia",
//       type: "Full-time",
//       duration: "Sep 2024 – Aug 2025 · 1 yr",
//       location: "Jaipur, Rajasthan, India · Hybrid",
//     },
//     {
//       role: "MERN STACK Training",
//       company: "WsCube Tech",
//       type: "Self-employed",
//       duration: "Feb 2023 – Mar 2025 · 2 yrs 2 mos",
//       location: "Jaipur, Rajasthan, India · Remote",
//     },
//   ];
//   return (
//     <>
//       <Skill />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Image Section */}
//         <div className="flex flex-col justify-start items-center">
//           {/* Download CV Button */}
//           <a
//             href={resume} // Replace with the actual path to your CV file
//             download="naveen_cv.pdf" // Replace with your desired file name
//             className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Download My CV
//           </a>
//           {/* Image Section */}
//           <img
//             src={image} // Replace `image` with your actual image source
//             alt="About Me"
//             className="w-full max-w-md lg:max-w-full rounded-lg shadow-lg"
//           />
//           <div className="h-screen overflow-auto">
//             <h2 className="text-center text-[black] font-medium py-[10px]">
//               Our Certificate
//             </h2>
//             <img
//               src={joinletter} // Replace `image` with your actual image source
//               alt="About Me"
//               className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
//             />
//             <img
//               src={certificateimage} // Replace `image` with your actual image source
//               alt="About Me"
//               className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
//             />
//             <img
//               src={certificateimage2} // Replace `image` with your actual image source
//               alt="About Me"
//               className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
//             />
//             <img
//               src={certificateimage3} // Replace `image` with your actual image source
//               alt="About Me"
//               className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="container mx-auto px-4 text-[black]">
//           <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
//           <div className="max-w-4xl mx-auto text-lg">
//             <p className="mb-6 text-center">
//               Hi, I'm Naveen Saini, a full-stack developer with a passion for
//               building modern web applications. I specialize in{" "}
//               <strong>React.js, Node.js, Tailwind CSS, and AWS Lambda</strong>, and I have
//               extensive experience in both <strong>MERN Stack</strong> and{" "}
//               <strong>WordPress Development</strong>. I also work with{" "}
//               <strong>REST APIs</strong> to create scalable and efficient solutions.
//             </p>


//             <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">🚀 My Expertise</h3>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>
//                   <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js)
//                 </li>
//                 <li>
//                   <strong>WordPress Development</strong> (Custom Themes, Plugins, and Websites)
//                 </li>
//                 <li>
//                   <strong>AWS Lambda</strong> (Serverless functions and cloud-based execution)
//                 </li>
//                 <li>
//                   <strong>REST API</strong> (Designing and integrating scalable APIs)
//                 </li>
//               </ul>

//             </div>

//             <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">
//                 📚 My Background & Experience
//               </h3>

//               <div className="space-y-6">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-4 border-b pb-4 last:border-0"
//                   >
//                     <div className="p-2 rounded-lg bg-gray-100">
//                       <BiBriefcase className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold">{exp.role}</h3>
//                       <p className="text-gray-700">
//                         {exp.company} · {exp.type}
//                       </p>
//                       <p className="text-sm text-gray-500">{exp.duration}</p>
//                       <p className="text-sm text-gray-500">{exp.location}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>


//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Skill() {
//   const skills = [
//     {
//       name: "Wordpress",
//       icon: <FaWordpress className="text-white" size={40} />,
//     },
//     { name: "Html", icon: <FaHtml5 className="text-orange-600" size={40} /> },
//     { name: "Css", icon: <FaCss3Alt className="text-blue-600" size={40} /> },
//     {
//       name: "Bootstrap",
//       icon: <FaBootstrap className="text-purple-600" size={40} />,
//     },
//     {
//       name: "Tailwind",
//       icon: <SiTailwindcss className="text-cyan-500" size={40} />,
//     },
//     {
//       name: "JavaScript",
//       icon: <FaJs className="text-yellow-400" size={40} />,
//     },
//     {
//       name: "Jquery",
//       icon: <DiJqueryLogo className="text-white animate-spin" size={40} />,
//     },
//     {
//       name: "React",
//       icon: <FaReact className="text-blue-400 animate-spin" size={40} />,
//     },
//     {
//       name: "Next.js",
//       icon: <RiNextjsFill className="text-[white] " size={40} />,
//     },
//     {
//       name: "Node.js",
//       icon: <FaNodeJs className="text-blue-400 " size={40} />,
//     },
//     {
//       name: "Express",
//       icon: <SiExpress className="text-white" size={40} />,
//     },

//     {
//       name: "MongoDB",
//       icon: <DiMongodb className="text-[#00e661]" size={40} />,
//     },
//     {
//       name: "Mongoose",
//       icon: <SiMongoose className="text-[orange]" size={40} />,
//     },
//     {
//       name: "Google Firebase",
//       icon: <SiFirebase className="text-[orange]" size={40} />,
//     },
//     {
//       name: "AWS Lambda & REST",
//       icon: <FaAws className="text-white" size={40} />,
//     },

//     {
//       name: "Vercel",
//       icon: <RiVercelLine className="text-white" size={40} />,
//     },
//     {
//       name: "Github",
//       icon: <FaGithub className="text-white" size={40} />,
//     },
//     {
//       name: "render",
//       icon: <SiRender className="text-[white]" size={40} />,
//     },
//     {
//       name: "Github Copilot",
//       icon: <SiGithubcopilot className="text-[#25c5df]" size={40} />,
//     },
//     {
//       name: "cursor ai",
//       icon: <svg
//         width="32"
//         height="32"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Cursor AI icon का SVG path यहां डालें */}
//         <path d="M4 2L20 12L4 22L6 14L14 12L6 10L4 2Z" />
//       </svg>
//     },
//   ];

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-[#ed143d] text-center mb-4">My Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:scale-105 transition-transform duration-300"
//           >
//             {skill.icon}
//             <p className="mt-2 text-sm text-white font-medium">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
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
  FaDownload,
  FaCertificate,
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
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import { BiBriefcase, BiUser, BiRocket } from "react-icons/bi";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const experiences = [
    {
      role: "AWS Developer",
      company: "IPage UM Services Pvt Ltd (IPAGE UMS)",
      type: "",
      duration: "Aug 2025 – Present · 4 month",
      location: "Hyderabad, Telangana, India · Remote",
      icon: <FaAws className="text-orange-500" />,
    },
    {
      role: "Next.js or React.js Developer",
      company: "Shape Multimedia",
      type: "Full-time",
      duration: "Sep 2024 – Aug 2025 · 1 yr",
      location: "Jaipur, Rajasthan, India · Hybrid",
      icon: <RiNextjsFill className="text-white" />,
    },
    {
      role: "MERN STACK Training",
      company: "WsCube Tech",
      type: "Self-employed",
      duration: "Feb 2023 – Mar 2025 · 2 yrs 2 mos",
      location: "Jaipur, Rajasthan, India · Remote",
      icon: <FaReact className="text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8">
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center space-x-4">
          {[
            { id: "about", label: "About Me", icon: <BiUser /> },
            { id: "skills", label: "Skills", icon: <BiRocket /> },
            { id: "certificates", label: "Certificates", icon: <FaCertificate /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="container mx-auto px-4">
        {activeTab === "about" && <AboutContent experiences={experiences} />}
        {activeTab === "skills" && <SkillsContent />}
        {activeTab === "certificates" && <CertificatesContent />}
      </div>
    </div>
  );
}

function AboutContent({ experiences }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Image & Download */}
      <div className="space-y-8">
        {/* Download Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaDownload className="text-blue-600 dark:text-blue-400 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Download My Resume
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Get my complete professional profile
          </p>
          <a
            href={resume}
            download="naveen_saini_resume.pdf"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>

        {/* Profile Image */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <img
            src={image}
            alt="Naveen Saini"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600">Naveen Saini</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate <strong>Full-Stack Developer</strong> specializing in modern web technologies.
            I create scalable, efficient solutions using <strong>React.js, Node.js, AWS Lambda,</strong> and <strong>MERN Stack</strong>.
            With expertise in both development and deployment, I bring ideas to life with clean, maintainable code.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <BiRocket className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
              "WordPress Development (Custom Themes, Plugins)",
              "AWS Lambda & Serverless Architecture",
              "REST API Design & Integration",
              "Tailwind CSS & Modern UI/UX",
              "Cloud Deployment & DevOps"
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
              <BiBriefcase className="text-green-600 dark:text-green-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-xl flex items-center justify-center shadow-sm">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company} · {exp.type}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  const skills = [
    {
      name: "Wordpress",
      icon: <FaWordpress className="text-blue-600" size={32} />,
      level: 90,
      category: "CMS"
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600" size={32} />,
      level: 95,
      category: "Frontend"
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600" size={32} />,
      level: 90,
      category: "Frontend"
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" size={32} />,
      level: 85,
      category: "Frontend"
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-500" size={32} />,
      level: 92,
      category: "Frontend"
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" size={32} />,
      level: 88,
      category: "Frontend"
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400" size={32} />,
      level: 85,
      category: "Frontend"
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-white" size={32} />,
      level: 80,
      category: "Frontend"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" size={32} />,
      level: 82,
      category: "Backend"
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-800 dark:text-white" size={32} />,
      level: 80,
      category: "Backend"
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="text-green-500" size={32} />,
      level: 78,
      category: "Database"
    },
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" size={32} />,
      level: 75,
      category: "Cloud"
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-orange-500" size={32} />,
      level: 70,
      category: "Backend"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" size={32} />,
      level: 85,
      category: "Tools"
    },
    {
      name: "Vercel",
      icon: <RiVercelLine className="text-white" size={32} />,
      level: 80,
      category: "Deployment"
    },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here's a comprehensive overview of my technical expertise
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-200 dark:border-blue-800 pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.filter(skill => skill.category === category).map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificatesContent() {
  const certificates = [
    { image: joinletter, title: "Joining Letter" },
    { image: certificateimage, title: "AWS Certification" },
    { image: certificateimage2, title: "MERN Stack Certification" },
    { image: certificateimage3, title: "React Development" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Certificates & Achievements
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Professional certifications and recognition
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                {cert.title}
              </h3>
            </div>
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}