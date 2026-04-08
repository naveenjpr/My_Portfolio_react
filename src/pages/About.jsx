import React, { useEffect, useRef, useState } from "react";
import image from "../assets/converted_1 (1).webp";
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
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiSupabase,
} from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import { BiBriefcase, BiUser, BiRocket } from "react-icons/bi";
import axios from "axios";
import { GrMysql } from "react-icons/gr";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

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
              className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              aria-pressed={activeTab === tab.id}
              aria-label={`Show ${tab.label}`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="container mx-auto px-4">
        {activeTab === "about" && <AboutContent />}
        {activeTab === "skills" && <SkillsContent />}
        {activeTab === "certificates" && <CertificatesContent />}
      </div>
    </div>
  );
}

/* ---------------- About Content ---------------- */
function AboutContent() {
  const [profileImage, setProfileImage] = useState(image); // fallback local image
  const [resumePdf, setResumePdf] = useState(resume); // fallback local PDF

  useEffect(() => {
    axios
      .post(
        "https://dynmic-portfolio-my-website.onrender.com/api/backend/Resume/view",
      )
      .then((res) => {
        const data = res.data.data;
        if (data && data.length > 0) {
          const item = data[0];
          // If the URL ends with common image extensions, treat as profile image
          const url = item.image;
          const isImage = /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);
          const isPdf = /\.pdf$/i.test(url);

          if (isImage) {
            setProfileImage(url);
          } else if (isPdf) {
            setResumePdf(url);
          } else {
            // If we can't determine, keep fallbacks
            console.warn("Unknown file type from API, using local assets");
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch resume data:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Image & Download */}
      <div className="space-y-8">
        {/* Download Card */}
        <ResumeCard resumePdf={resumePdf} />

        {/* Profile Image (circular) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex items-center justify-center">
          <div className="overflow-hidden ring-4 ring-white/10 dark:ring-gray-700 shadow-xl transform hover:scale-105 transition">
            <img
              src={profileImage}
              alt="Naveen Saini portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Content (unchanged) */}
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
        <MyExperience />
        {/* Experience Section */}
      </div>
    </div>
  );
}

function MyExperience() {
  const [experiences, setexperiences] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://dynmic-portfolio-my-website.onrender.com/api/website/Experience/view",
      )
      .then((res) => {
        setexperiences(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
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
            className="group relative flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            {/* Left timeline line */}
            <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-600"></div>

            {/* Logo */}
            <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={exp.companyLogo}
                alt={exp.companyName}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Top Row */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.companyName}
                </h3>

                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {exp.employmentType}
                </span>
              </div>

              {/* Date + Duration */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex flex-wrap gap-2 items-center">
                <span>
                  {new Date(exp.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                  {" - "}
                  {exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </span>

                <span className="text-gray-300">•</span>

                <span>{exp.duration}</span>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                📍 {exp.location}
              </p>

              {/* Description */}
              {exp.description?.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[6px] w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              {exp.technologies?.filter((t) => t).length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies
                    .filter((t) => t)
                    .map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Resume Card ---------------- */
function ResumeCard({ resumePdf }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumePdf) return;
    setDownloading(true);
    try {
      const response = await fetch(resumePdf);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      const contentType = response.headers.get("content-type");
      // Optional: verify it's a PDF
      if (!contentType || !contentType.includes("application/pdf")) {
        console.warn(
          "Warning: Fetched file may not be a PDF (Content-Type: " +
            contentType +
            ")",
        );
        // Still proceed, but warn
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Naveen_Saini_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert(
        "Download failed. Opening in new tab – you can save it manually (Ctrl+S).",
      );
      window.open(resumePdf, "_blank");
    } finally {
      setDownloading(false);
    }
  };

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

      {resumePdf ? (
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            aria-label="Download my CV"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaDownload />
            <span>{downloading ? "Downloading..." : "Download CV"}</span>
          </button>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my CV"
            className="inline-flex text-blue-700 items-center gap-2 border border-blue-400 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold"
          >
            View
          </a>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-3">Loading resume...</p>
      )}

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        PDF • Auto Updated from Admin Panel
      </p>
    </div>
  );
}

/* ---------------- Skills Content (unchanged) ---------------- */
function SkillsContent() {
  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  // 🔥 API CALL
  useEffect(() => {
    axios
      .post(
        "https://dynmic-portfolio-my-website.onrender.com/api/website/skills/view",
      )
      .then((res) => {
        setSkills(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 🔥 CATEGORY GENERATE (from API)
  const categories = [...new Set(skills.map((s) => s.parentskills?.Skills))];

  // 🔥 SCROLL ANIMATION
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
      { threshold: 0.15 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4" ref={containerRef}>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here's a comprehensive overview of my technical expertise
        </p>
      </div>

      {/* Categories */}
      {categories.length > 0
        ? categories.map((category, i) => (
            <div key={i} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-200 dark:border-blue-800 pb-2 capitalize">
                {category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills
                  .filter((skill) => skill.parentskills?.Skills === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-4">
                        <img
                          src={skill.SkillsIcon}
                          alt={skill.SkillsName}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Name */}
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        {skill.SkillsName}
                      </h4>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{
                            width: visible ? `${skill.percentage}%` : "0%",
                          }}
                        />
                      </div>

                      {/* Percentage */}
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                        {skill.percentage}%
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))
        : "this time api not working please try again later"}
    </div>
  );
}

/* ---------------- Certificates Content (unchanged) ---------------- */
function CertificatesContent() {
  const [certificates, setcertificates] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://dynmic-portfolio-my-website.onrender.com/api/website/Achievements/view",
      )
      .then((res) => {
        setcertificates(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const certificates = [
  //   { image: joinletter, title: "Joining Letter" },
  //   { image: certificateimage, title: "AWS Certification" },
  //   { image: certificateimage2, title: "MERN Stack Certification" },
  //   { image: certificateimage3, title: "React Development" },
  // ];

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
                {cert.Description}
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
