import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";
import "./style.css";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center ">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects that I've worked on
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            From Graphic Design to Web Applications. Here are some of the
            projects that I've worked on for both personal use and also for
            clients.
          </p>
        </div>

        <div className="project-side-margin flex flex-wrap m-auto">
          {projects.map((project) => (
            <a
              // href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br />
                  <button>
                    <a
                      className="button"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Application
                    </a>
                  </button>

                  <button>
                    <a
                      className="mt-6 button"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </a>
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* THIS GOES ON LINES 20 If all else failes */
}
{
  /* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              // href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br />
                  <p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Application
                    </a>
                  </p>
                  <p>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </a>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div> */
}
