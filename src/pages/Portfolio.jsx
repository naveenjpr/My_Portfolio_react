import React from "react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "100 project series",
      description: "different type project create this series",
      technologies: ["", "React", "Tailwind CSS", "node js"],
      link: "https://100-react-next-project-list.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 2,
      title: "ashapurna website clone",
      description:
        "Ashapurna Buildcon – Real Estate Developer in Rajasthan” this is website clone",
      technologies: ["fronted:react", , "tailwind"],
      link: "https://ashapurna-clone.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 3,
      title: "frank-and-ok website clone",
      description: "This is clothing ecommerce website",
      technologies: ["Next.js", "Tailwind CSS", "node js"],
      link: "https://frank-and-ok.vercel.app/", // Add a link to the project (e.g., GitHub or live demo)
    },
    {
      id: 4,
      title: "sphere constration",
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
      title: "Quiz app",
      description:
        " This code is for a Quiz App with Login Authentication using Firebase and React Context API. Here’s a breakdown of what it does:",
      technologies: [
        "",
        "React.js",
        "Firebase",
        "JavaScript (ES6+)",
        "Local Storage,React Context API",
      ],
      link: "https://quiz-app-with-login-naveen.vercel.app/ViewQuiz", // Add a link to the project (e.g., GitHub or live demo)
    },

    // Add more projects as needed
  ]
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center">Portfolio</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id} // Unique key for each project
            className="bg-white p-6 rounded-lg text-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
