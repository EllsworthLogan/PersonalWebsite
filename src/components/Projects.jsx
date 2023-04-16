import React from "react";
import me from "/Users/logan/Desktop/untitled folder 2/logansite/src/images/portrait.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      preview: me,
      alt: "1img",
      title: "Project 1",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
    {
      id: 2,
      preview: me,
      alt: "2img",
      title: "Project 2",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
    {
      id: 3,
      preview: me,
      alt: "3img",
      title: "Project 3",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
    {
      id: 4,
      preview: me,
      alt: "4img",
      title: "Project 4",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-b from-blue-300 to-blue-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Projects</p>
          <p className="py-6">Some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Maps a project object to a project space*/}
          {projects.map((project) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.preview}
                alt={project.alt}
                className="hover:scale-105 duration-200 rounded-md"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-blue-700 to-blue-500 my-2">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-blue-700 to-blue-500 my-2">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
