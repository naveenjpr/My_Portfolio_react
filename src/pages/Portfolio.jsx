import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaFilter,
} from "react-icons/fa";
import dronetv from "../assets/dronetv.png";
import shubhFashion from "../assets/shubhFashion.png";
import shubhFashionadminpanel from "../assets/shubhFashionadminpanel.png";
import aiassist from "../assets/AI Assist.png";
import Hundred from "../assets/hundren.png";
import question from "../assets/question.png";
import ashapurna from "../assets/ashapurna.png";
import frankandoak from "../assets/frankandoak.png";
import myntra from "../assets/mantrawebsite.png";
import razorpay from "../assets/razorpay.png";
import curdoperation from "../assets/curdoperation.png";
import loginRegister from "../assets/loginRegister.png";
import mailsend from "../assets/mailsend.png";
import imageuploadlogic from "../assets/imageuploadlogic.png";
import pagination from "../assets/pagination.png";
import searchApi from "../assets/searchApi.png";
import flowbite from "../assets/flowbite.png";
import spheraconstion from "../assets/spheraconstion.png";
import blogapp from "../assets/blogconstration.png";
import skydashadmin from "../assets/skydashadmin.png";
import multiapp from "../assets/multiapp.png";
import addtocart from "../assets/addtocart.png";
import onepage from "../assets/onepage.png";
import dermalife from "../assets/dreamlife.png";
import apiapply from "../assets/apiapply.png";
import smartcity from "../assets/smartcity.png";
import container from "../assets/container.png";
import ecommerce from "../assets/ecommerce.png";
import lms from "../assets/lms.png";
import portfolie from "../assets/portfolie.png";
import Angular from "../assets/Angular.png";

export default function Portfolio() {
  const [selectedTech, setSelectedTech] = useState("All");

  const projects = [
    {
      image: dronetv,
      title: "Dronetv.in",
      description:
        "Drone TV offers news, interviews, expert insights and services related to drone technology — covering drone surveying, manufacturing/deployment support, photography/videography, simulator software development, and broader industry commentary",
      technologies: ["React.js", "Tailwind CSS", "AWS", "typescript"],
      github: {
        frontend: "https://github.com/gisipageums-droid/Dronetv",
        backend: "",
      },
      link: "https://www.dronetv.in/",
    },
    {
      image: shubhFashion,
      title: "Full Ecommerce Website Frontend",
      description:
        "This website  is an online shopping platform showcasing trendy products with sections like Home, Shop, Wishlist, Cart, and My Orders. It appears to be an e-commerce site where products are displayed and purchased online.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js API"],
      github: {
        frontend: "https://github.com/Gionee123/gudiya_website",
        backend: "",
      },
      link: "https://gudiya-website.vercel.app/",
    },
    {
      image: shubhFashionadminpanel,
      title: "E-commerce with Admin Dashboard",
      description:
        "It offers backend controls for managing things like products, orders, users, or website data — typically used by administrators rather than shoppers.",
      technologies: ["React", "Tailwind CSS", "Node.js API"],
      github: {
        frontend: "",
        backend: "https://github.com/Gionee123/Gudiya_admin_panel",
      },
      link: "https://gudiya-adminpanel.vercel.app/",
    },
    {
      image: ashapurna,
      title: "Ashapurna Website",
      description:
        "This appears to be a clone version of the Ashapurna Buildcon Ltd. website—likely a front-end replication showcasing projects, property offerings and the developer branding (townships, villas, plots in Jodhpur/Rajasthan).",
      technologies: ["React", "Tailwind CSS"],
      github: {
        frontend: "https://github.com/naveenjpr/ashapurna",
        backend: "",
      },
      link: "https://ashapurna-clone.vercel.app/",
    },
    {
      image: frankandoak,
      title: "Frank & Oak E-commerce",
      description:
        "This appears to be a fashion-ecommerce storefront, showcasing women’s and men’s clothing (tops, shirts, dresses, swimwear, etc.) with features like free shipping, free returns, loyalty “Frank Rewards”, and a “Buy Now, Pay Later” option",
      technologies: ["Next.js", "Tailwind CSS", "Node.js"],
      github: {
        frontend:
          "https://github.com/naveenjpr/FrankAndOak-nextjs-nodejs/tree/main/frankandoak",
        backend: "https://github.com/naveenjpr/API-frank-And-Oak",
      },
      link: "https://frank-and-ok.vercel.app/",
    },
    {
      image: aiassist,
      title: "AI Assist",
      description:
        "This appears to be a React-based AI assistant web app built using the Google Gemini API (or at least styled as such). The interface likely enables conversational chat with an AI model, possibly allowing text (and maybe other input types) and delivering replies in a chat UI.",
      technologies: ["React", "Tailwind CSS", "Node.js API", "Gemini AI"],
      github: {
        frontend:
          "https://github.com/Gionee123/ai-assistant-in-with-gemini-react",
        backend:
          "https://github.com/Gionee123/AI-Assistant-in-node.js-with-Gemini-node.js",
      },
      link: "https://ai-assistant-in-with-gemini-react.vercel.app/",
    },
    {
      image: Hundred,
      title: "100 Project Series",
      description:
        "This appears to be a curated list of 100 projects built with React and Next.js, aimed at developers looking for ideas and challenges. It likely categorises project ideas by skill-level and includes details or links to each.This kind of list is helpful if you (like you are) are working through a 100-projects challenge and want inspiration or structure for your next builds.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      github: {
        frontend: "https://github.com/naveenjpr/100_react_next_project_list",
        backend: "https://github.com/naveenjpr/rss-feed-node.js",
      },
      link: "https://100-react-next-project-list.vercel.app/",
    },
    {
      image: question,
      title: "Practice Questions Admin",
      description:
        "This appears to be an Admin Dashboard interface for a platform likely named “Practics Question”. It is used by administrators to manage question-sets, users, analytics, or system settings rather than general end-users.",
      technologies: ["React", "Tailwind CSS", "Node.js API"],
      github: {
        frontend: "",
        backend: "",
      },
      link: "https://practics-question-admin.vercel.app/login",
    },
    {
      image: myntra,
      title: "Myntra Filter Logic",
      description:
        "This appears to be a clone or practice version of the Myntra e-commerce website. Likely built for learning or showcasing a project, it mimics a fashion retail storefront with categories, product listings, and possibly cart/wishlist features.",
      technologies: ["React.js", "Tailwind CSS", "Dynamic API"],
      github: {
        frontend: "https://github.com/naveenjpr/myntra-project",
      },
      link: "https://myntra-project-wheat.vercel.app/",
    },
    {
      image: Angular,
      title: "mini-ecommerce-app-angular",
      description: "Shopping cart with product management and checkout",
      technologies: ["Angular", "Tailwind CSS", "Dynamic API"],
      github: {
        frontend: "https://github.com/naveenjpr/mini-ecommerce-app-angular",
        backend: "",
      },
      link: "https://mini-ecommerce-app-angular.vercel.app/",
    },
    {
      image: razorpay,
      title: "Razorpay Payment Integration",
      description:
        "This appears to be a demo or starter project built with Next.js that integrates the Razorpay payment gateway. Users can likely enter an amount or select a product and proceed to make a payment via Razorpay’s checkout flow.",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-razor-payment-t",
        backend: "https://github.com/Gionee123/node.js-razor-payment-api",
      },
      link: "https://next-js-razor-payment.vercel.app/",
    },
    {
      image: curdoperation,
      title: "CRUD Operations",
      description:
        "This appears to be a demo or tutorial-style web application built with Next.js (likely using its API routes) showcasing full CRUD functionality (Create, Read, Update, Delete) via an online API. Users can interact with a backend to add, view, modify, and remove data entries.",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend:
          "https://github.com/Gionee123/curd-operation-next.js-online-api",
        backend: "https://github.com/Gionee123/node.js-curd-operation",
      },
      link: "https://curd-operation-next-js-online-api.vercel.app/",
    },
    {
      image: loginRegister,
      title: "Authentication System",
      description:
        "This looks like a demo or project built with Next.js that offers user authentication flows: login, registration, and a protected profile page. Users can sign up, log in, and view their profile once authenticated",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-login-register-profile",
        backend: "https://github.com/Gionee123/node.js-login-register-profile",
      },
      link: "https://next-js-login-register-profile.vercel.app/",
    },
    {
      image: mailsend,
      title: "Email System",
      description:
        "This appears to be a demo or project built with Next.js that implements an email-sending feature. It likely offers a form or interface where users can input details (subject, message, recipient) and then send an email via an API route (server side) or integration like Nodemailer / SMTP",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-send-mail-",
        backend: "https://github.com/Gionee123/node.js-mail_send-api",
      },
      link: "https://next-js-send-mail.vercel.app/",
    },
    {
      image: imageuploadlogic,
      title: "Image Upload System",
      description:
        "This appears to be a demo or project built with Next.js that allows image upload functionality. It likely provides a UI for selecting and uploading images (and possibly previewing them) and uses backend/API routes to handle the upload process.",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-image-upload",
        backend: "https://github.com/Gionee123/node.js-image-upload",
      },
      link: "https://next-js-image-upload.vercel.app/",
    },
    {
      image: pagination,
      title: "Pagination System",
      description:
        "This appears to be a demo or tutorial project built with Next.js that implements pagination functionality—likely showcasing how to display long lists/items, split them into pages, and navigate between them in a web-app.",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-pagination",
        backend: "https://github.com/Gionee123/node.js-pagination",
      },
      link: "https://next-js-pagination-gamma.vercel.app/",
    },
    {
      image: searchApi,
      title: "Search API",
      description:
        "This appears to be a project built with Next.js that implements a search API / search-feature. The interface likely lets users enter a query and fetch results dynamically (via API route) demonstrating how to integrate search functionality in a Next.js application.",
      technologies: ["MVC", "Node.js API", "Next.js"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-search-api",
        backend: "https://github.com/Gionee123/node.js-search-api",
      },
      link: "https://flowbite-kappa.vercel.app/",
    },
    {
      image: spheraconstion,
      title: "Sphere Construction",
      description:
        "This appears to be a demonstration or portfolio website built under the name “Sphere Constration” (which may be a typo for “Sphere Construction”). The site likely showcases a construction-oriented company or service, possibly featuring buildings, projects, company info and visual elements typical of construction/architecture themes.",
      technologies: ["HTML5", "Bootstrap", "CSS", "JavaScript"],
      github: {
        frontend: "https://github.com/naveenjpr/sphere_constration",
        backend: "",
      },
      link: "https://sphere-constration.vercel.app/",
    },
    {
      image: blogapp,
      title: "Blog Application",
      description:
        "This appears to be a blog application built with React (or Next.js) deployed on Vercel. It likely allows users to read articles/posts, and might include features like post listing, detail view, perhaps author info or comments.",
      technologies: ["React", "Firebase", "Context API"],
      github: {
        frontend: "https://github.com/naveenjpr/blog-app",
        backend: "",
      },
      link: "https://blog-app-five-chi.vercel.app/",
    },
    {
      image: skydashadmin,
      title: "Skydash Admin Panel",
      description:
        "Comprehensive admin dashboard with multiple management features",
      technologies: ["React", "React Router", "Tailwind CSS"],
      github: {
        frontend: "https://github.com/naveenjpr/skydash-admin-panel",
        backend: "",
      },
      link: "https://skydash-admin-panel.vercel.app/",
    },
    {
      image: multiapp,
      title: "Multiple Applications",
      description: "Collection of various mini-applications and utilities",
      technologies: ["React", "Tailwind", "API Integration"],
      github: {
        frontend: "https://github.com/Gionee123/next.js-image-upload",
        backend: "https://github.com/naveenjpr/SearchMovieForApi/tree/main/src",
      },
      link: "https://search-movie-for-api.vercel.app/",
    },
    {
      image: addtocart,
      title: "E-commerce Cart System",
      description: "Shopping cart with product management and checkout",
      technologies: ["React Context", "React Router", "Tailwind CSS"],
      github: {
        frontend:
          "https://github.com/naveenjpr/context-api-dummyApi-update-delete",
        backend: "",
      },
      link: "https://context-api-dummy-api-update-delete.vercel.app/",
    },
    {
      image: onepage,
      title: "One Page Website",
      description: "Modern single page website with smooth navigation",
      technologies: ["React", "Internal Navigation", "Smooth Scroll"],
      github: {
        frontend: "https://github.com/naveenjpr/one-page-second-website",
        backend: "",
      },
      link: "https://one-page-second-website.vercel.app/",
    },
    {
      image: dermalife,
      title: "Derma Life Website",
      description: "Hair transplant website clone with modern design",
      technologies: ["Next.js", "Tailwind CSS"],
      github: {
        frontend: "https://github.com/naveenjpr/derma-life",
        backend: "",
      },
      link: "https://derma-life.vercel.app/",
    },
    {
      image: apiapply,
      title: "API Data Display",
      description: "Multiple sections displaying data from various APIs",
      technologies: ["React", "React Router", "State Management"],
      github: {
        frontend: "",
        backend: "",
      },
      link: "https://react-api-eta-two.vercel.app/",
    },
    {
      image: smartcity,
      title: "Smart City Mohali",
      description: "Real estate project website with comprehensive information",
      technologies: ["HTML5", "CSS", "Google Maps", "YouTube Embed"],
      github: {
        frontend: "https://github.com/naveenjpr/smart-city",
        backend: "",
      },
      link: "https://smart-city-red.vercel.app/",
    },
    {
      image: container,
      title: "Contentholic Website",
      description: "Company services and information website",
      technologies: ["HTML5", "CSS", "JavaScript"],
      github: {
        frontend: "https://github.com/naveenjpr/contentholic_clone",
        backend: "",
      },
      link: "https://one-page-second-website.vercel.app/",
    },
    {
      image: ecommerce,
      title: "WordPress E-commerce",
      description:
        "This appears to be an e-commerce demo/storefront (hosted on the free platform InfinityFree via the sub-domain “great-site.net”) with categories like “Men’s T Shirts”, “Men’s Jeans”, “Women’s Skirts”, etc.",
      technologies: ["WordPress", "E-commerce"],
      github: {},
      link: "http://naveenwebsitecreate.great-site.net/?i=1",
    },
    {
      image: lms,
      title: "LMS Project",
      description:
        "This looks like an LMS (Learning Management System) project — likely created by you (since your name is Naveen Saini) — deployed on a free hosting subdomain. It’s probably a demo where you can manage courses, users, lessons, etc., as part of your MERN/React/Next.js stack work.",
      technologies: ["WordPress", "LMS"],
      github: {},
      link: "https://naveensainlmsproject.infinityfreeapp.com/?i=1",
    },
    {
      image: portfolie,
      title: "Portfolio Website",
      description:
        "This appears to be a personal portfolio site for “Naveen”, detailing over 2 years of experience in IT as a React.js Developer, showcasing dynamic, responsive and user-friendly web work.",
      technologies: ["WordPress"],
      github: {},
      link: "http://naveen.lovestoblog.com/",
    },
  ];

  // Extract all unique technologies for filtering
  const allTechnologies = [
    "All",
    ...new Set(
      projects.flatMap((project) =>
        project.technologies.filter((tech) => tech && tech.trim() !== "")
      )
    ),
  ];

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech === selectedTech)
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my projects built with React.js, Next.js, Node.js,
            and WordPress
          </p>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "WordPress",
              "Angular",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <FaFilter className="text-blue-500" />
            Filter by Technology:
          </div>
          {allTechnologies.slice(0, 15).map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48  transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.technologies[0] || "Web"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies
                    .filter((tech) => tech && tech.trim() !== "")
                    .slice(0, 3)
                    .map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs border border-gray-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                  {/* GitHub Links */}
                  {project.github &&
                    (project.github.frontend || project.github.backend) && (
                      <div className="flex gap-2">
                        {project.github.frontend && (
                          <a
                            href={project.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                            title="Frontend Code"
                          >
                            <FaCode className="text-sm" />
                            <span className="hidden sm:inline">Frontend</span>
                          </a>
                        )}
                        {project.github.backend && (
                          <a
                            href={project.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                            title="Backend Code"
                          >
                            <FaServer className="text-sm" />
                            <span className="hidden sm:inline">Backend</span>
                          </a>
                        )}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                No projects match the selected technology filter. Try selecting
                a different technology.
              </p>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Built with passion and modern web technologies •{" "}
            {filteredProjects.length} projects displayed
          </p>
        </div>
      </div>
    </div>
  );
}
