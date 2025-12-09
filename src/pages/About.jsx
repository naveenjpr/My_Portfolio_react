// About.jsx
import React, { useEffect, useRef, useState } from "react";
import image from "../assets/converted_1 (1).webp";
import certificateimage from "../assets/converted_4.webp";
import certificateimage2 from "../assets/converted_2.webp";
import certificateimage3 from "../assets/converted_3 (1).webp";
import resume from "../assets/new2 resume.pdf";
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
            {
              id: "certificates",
              label: "Certificates",
              icon: <FaCertificate />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              aria-pressed={activeTab === tab.id}
            >
              <span className="text-lg">{tab.icon}</span>
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

/* ---------------- About Content ---------------- */
function AboutContent({ experiences }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Image & Download */}
      <div className="space-y-8">
        {/* Download Card */}
        <ResumeCard />

        {/* Profile Image (circular) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex items-center justify-center">
          <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-white/10 dark:ring-gray-700 shadow-xl transform hover:scale-105 transition">
            <img
              src={image}
              alt="Naveen Saini portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Naveen Saini
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            <span className="inline-block rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black text-xs font-semibold px-3 py-1">
              MERN Stack Developer
            </span>
            <span className="ml-3">
              Building scalable web apps · AWS deployments · Serverless
            </span>
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate <strong>Full-Stack Developer</strong> specializing in
            modern web technologies. I create scalable, efficient solutions
            using <strong>React.js, Node.js, AWS Lambda,</strong> and{" "}
            <strong>MERN Stack</strong>. With expertise in both development and
            deployment, I bring ideas to life with clean, maintainable code.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <BiRocket className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              My Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "MERN Stack (MongoDB, Express, React, Node)",
              "WordPress (Themes & Plugins)",
              "AWS Lambda & Serverless",
              "REST APIs & Integrations",
              "Tailwind CSS & UI/UX",
              "Cloud Deployment & DevOps",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-700 dark:text-gray-200">
                  {skill}
                </span>
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
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/60 dark:bg-gray-600 flex items-center justify-center">
                  {exp.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {exp.company} {exp.type ? `· ${exp.type}` : ""}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Resume Card ---------------- */
function ResumeCard() {
  return (
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

      <div className="flex items-center justify-center gap-3 mt-3">
        <a
          href={resume}
          download="new2 resume.pdf"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition"
        >
          <FaDownload />
          <span>Download CV</span>
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/10 text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/7 transition"
          aria-label="View resume"
        >
          View
        </a>
      </div>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        PDF • 220 KB • Last updated: Aug 2025
      </p>
    </div>
  );
}

/* ---------------- Skills Content ---------------- */
function SkillsContent() {
  const skills = [
    {
      name: "Wordpress",
      icon: <FaWordpress size={32} />,
      level: 90,
      category: "CMS",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={32} />,
      level: 95,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={32} />,
      level: 90,
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={32} />,
      level: 85,
      category: "Frontend",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={32} />,
      level: 92,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs size={32} />,
      level: 88,
      category: "Frontend",
    },
    {
      name: "React",
      icon: <FaReact size={32} />,
      level: 85,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill size={32} />,
      level: 80,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={32} />,
      level: 82,
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress size={32} />,
      level: 80,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb size={32} />,
      level: 78,
      category: "Database",
    },
    { name: "AWS", icon: <FaAws size={32} />, level: 75, category: "Cloud" },
    {
      name: "Firebase",
      icon: <SiFirebase size={32} />,
      level: 70,
      category: "Backend",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={32} />,
      level: 85,
      category: "Tools",
    },
    {
      name: "Vercel",
      icon: <RiVercelLine size={32} />,
      level: 80,
      category: "Deployment",
    },
  ];

  const categories = [...new Set(skills.map((s) => s.category))];

  // IntersectionObserver to animate progress bars when in view
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here's a comprehensive overview of my technical expertise
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-200 dark:border-blue-800 pb-2">
            {category}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
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
                      style={{ width: visible ? `${skill.level}%` : "0%" }}
                    />
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

/* ---------------- Certificates Content (with lightbox) ---------------- */
function CertificatesContent() {
  const certificates = [
    { image: joinletter, title: "Joining Letter" },
    { image: certificateimage, title: "AWS Certification" },
    { image: certificateimage2, title: "MERN Stack Certification" },
    { image: certificateimage3, title: "React Development" },
  ];

  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
            <button
              onClick={() => setLightbox(cert.image)}
              className="w-full overflow-hidden focus:outline-none"
              aria-label={`Open ${cert.title}`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightbox}
            alt="certificate preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
