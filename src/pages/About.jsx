import React from "react"
import image from "../assets/converted_1 (1).webp"
import certificateimage from "../assets/converted_4.webp"
import certificateimage2 from "../assets/converted_2.webp"
import certificateimage3 from "../assets/converted_3 (1).webp"
import resume from "../assets/naveen saini resume.pdf"

export default function About() {
  return (
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
            Hi, I'm John Doe, a full-stack developer with a passion for building
            modern web applications. I specialize in{" "}
            <strong>React.js, Node.js, and Tailwind CSS</strong>, and I have
            extensive experience in both <strong>MERN Stack</strong> and{" "}
            <strong>WordPress Development</strong>.
          </p>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 My Expertise</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>MERN Stack</strong> (MongoDB, Express.js, React.js,
                Node.js)
              </li>
              <li>
                <strong>WordPress Development</strong> (Custom Themes, Plugins,
                and Websites)
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              📚 My Background & Experience
            </h3>
            <p className="mb-4">
              With over <strong>2 years of experience</strong> in the IT
              industry as a <strong>React.js Developer</strong>, I have honed my
              skills in building dynamic, responsive, and user-friendly web
              applications. My journey began with an intensive{" "}
              <strong>Web Development training program</strong> at{" "}
              <strong>WsCube Tech</strong> (February 2023 - August 2024), where
              I gained hands-on expertise in modern web technologies, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>React.js</strong> for building interactive user
                interfaces.
              </li>
              <li>
                <strong>JavaScript, HTML, and CSS</strong> for front-end
                development.
              </li>
              <li>
                <strong>Node.js and Express.js</strong> for back-end
                development.
              </li>
              <li>
                <strong>MongoDB</strong> for database management.
              </li>
            </ul>
            <p className="mb-4">
              In addition to my MERN stack expertise, I have also completed a{" "}
              <strong>WordPress Development course</strong> at{" "}
              <strong>WsCube Tech</strong> (September 2024 - December 2024).
              This training has equipped me with the skills to design and
              develop custom WordPress websites, themes, and plugins, ensuring a
              seamless and visually appealing user experience.
            </p>
          </div>

          <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">💼 Current Role</h3>
            <p className="mb-4">
              Currently, I am working as a <strong>Web Developer</strong> at{" "}
              <strong>Shape Multimedia</strong> (September 2024 - Present). In
              this role, I am responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Developing and maintaining responsive web applications using the{" "}
                <strong>MERN stack</strong>.
              </li>
              <li>
                Designing and customizing <strong>WordPress websites</strong> to
                meet client requirements.
              </li>
              <li>
                Collaborating with cross-functional teams to deliver
                high-quality projects on time.
              </li>
              <li>
                Ensuring optimal performance, scalability, and security of web
                applications.
              </li>
            </ul>
          </div>

          <p className="mt-8 text-center">
            My experience spans designing, developing, and deploying web
            solutions that align with client requirements and industry best
            practices. I am passionate about creating seamless user experiences
            and continuously expanding my knowledge in the ever-evolving field
            of web development.
          </p>
        </div>
      </div>
    </div>
  )
}
