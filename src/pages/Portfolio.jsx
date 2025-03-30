import React from "react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "100 project series (react.js)",
      description: "different type project create this series",
      technologies: ["", "React", "Tailwind CSS", "node js"],
      link: "https://100-react-next-project-list.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 2,
      title: "ashapurna website  (react.js)",
      description:
        "Ashapurna Buildcon – Real Estate Developer in Rajasthan” this is website clone",
      technologies: ["fronted:react", , "tailwind"],
      link: "https://ashapurna-clone.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 3,
      title: "frank-and-ok website  (next.js)",
      description: "This is clothing ecommerce website",
      technologies: ["Next.js", "Tailwind CSS", "node js"],
      link: "https://frank-and-ok.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 4,
      title: "CURD OPERATION (node.js next .js)",
      description: "using backend node.js api and frontend next framwork ",
      technologies: [
        "MVC",
        "Node.js api",
        "next.js",
        "api online using render platform plus vercel",
        "https://curd-operation-next-js-online-api.vercel.app/",
      ],

      link: "https://sphere-constration.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 4,
      title: "sphere constration (index.html)",
      description:
        "sphere_constration is One page website,LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE”",
      technologies: [
        "HTML5",
        "Bootstrap",
        "CSS",
        "JavaScript",
        "Google Maps Embed API<iframe>",
        "CDN (Content Delivery Network)",
      ],

      link: "https://sphere-constration.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 5,
      title: "blog app (react.js) (Google firebase)",
      description:
        "this is a blog application that utilizes Firebase for authentication and possibly Firestore for data storage. Below is a breakdown of its key functionalities based on the provided files",
      technologies: [
        " Frontend Technologies:React.j:,React Context API,React Router ,Firebase Authentication: GoogleAuthProvider for Google Sign-In.",
      ],
      link: "https://blog-app-five-chi.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 6,
      title: "skydash-admin (react.js)",
      description:
        " Course Management:Add or view courses available in the system.Media Management:Upload videos/slides for tutorials or presentations.Team Management:Add team members or view the list of current team members.User Management:View registered users for monitoring or administrative purposes.Search Bar API Integration",
      technologies: [
        "React,React Router DOM,React Icons,Tailwind CSS,JavaScript",
      ],
      link: "https://skydash-admin-panel.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 7,
      title: "Count Down",
      description:
        " The page will display a live countdown timer to March 20, 2024, 23:59:59.The timer updates every second to show real-time changes.Every 10 seconds, the border and text colors of the timer elements will change to random colors for visual appeal.",
      technologies: [
        " HTML5,CSS (Bootstrap),Bootstrap v5.0.2:,Custom CSS,JavaScript,DOM Manipulation,Date and Time Operations,Dynamic Styling,Timers,CDN Links,Responsive Design",
      ],
      link: "https://random-color-clock.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 8,
      title: "multiple app",
      description:
        " these are multiple categories show this field.type of movie app,to-do-list,dummy . json api,table to form data show,weather app,curd operation,category click product show,password generator etc…",
      technologies: ["React,tailwind,dummy.json api"],
      link: "https://search-movie-for-api.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 9,
      title: "E-Commerce Add to cart (react.js)",
      description:
        " The code provided is part of a React application that manages a shopping cart with product listing, cart management, and checkout functionalities. Here’s a detailed description of the main components and their behavior:",
      technologies: [
        "React Context,React Router,Tailwind CSS,React Toastify,JavaScript ES6+ Features",
      ],
      link: "https://context-api-dummy-api-update-delete.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 10,
      title: "one page second website",
      description: "The code provided is part of a React",
      technologies: [
        "Navigation with Internal Links",
        "Back-to-Top Navigation",
      ],
      link: "https://one-page-second-website.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 11,
      title: "Next.js,tailwind",
      description: "this is hair transplant website one page website clone",
      technologies: [
        "Navigation with Internal Links",
        "Back-to-Top Navigation",
      ],
      link: "https://derma-life.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 12,
      title: "APi to data show",
      description:
        "Every section show data for “dummy .json api”,Todo,Product,Carts,Users,Posts,Comments,Quotes,Recipes",
      technologies: [":React,React Router,Tailwind CSS,State Management"],
      link: "https://react-api-eta-two.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 13,
      title: "Smart city mohali (index.html)",
      description:
        " The webpage is a comprehensive real estate project page that uses a combination of HTML, CSS, and likely JavaScript to create an interactive and visually appealing user experience. It includes various multimedia elements, forms, and external integrations to provide users with all the necessary information about the project",
      technologies: [
        "HTML5,CSS,Google Maps,YouTube Embed,SEO and Meta Tags,Forms,External Links,Footer",
      ],
      link: "https://smart-city-red.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 14,
      title: "contentholic website (index.html)",
      description:
        "This webpage is well-structured and provides comprehensive information about the company’s services, achievements, and contact details. It is designed to be user-friendly and visually appealing, with clear calls to action to engage potential clients",
      technologies: [
        "Navigation with Internal Links",
        "Back-to-Top Navigation",
      ],
      link: "https://one-page-second-website.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 15,
      title: "E-Commerce (wordpess)",
      description: "wordpress E-Commerce Website",
      technologies: ["Wordpress Ecommerce Website"],
      link: "http://naveenwebsitecreate.great-site.net/?i=1", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 16,
      title: "LMS-PROJECT (wordpress)",
      description: "wordpress LMS website",
      technologies: ["wordpess"],
      link: "https://naveensainlmsproject.infinityfreeapp.com/?i=1", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 17,
      title: "My portfolio website (wordpress)",
      description: "",
      technologies: [""],
      link: "http://naveen.lovestoblog.com/", // Add a link to the project (e.g., GitHub or live demo)
    },

    // Add more projects as needed
  ]
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center">Portfolio</h2>
      <h3 className="text-2xl font-[400] text-center py-[5px]">
        react.js,next.js,node.js,wordpress
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id} // Unique key for each project
            className="bg-white overflow-auto p-6 rounded-lg text-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2">📝Description:{project.description}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>📌 Technologies:</strong>{" "}
                {project.technologies.join(", ")}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
