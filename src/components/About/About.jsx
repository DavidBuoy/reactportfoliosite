import React from "react";
import "./style.css";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="hero-h1 sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm David.
          </h1>
          <p className="mb-8 leading-relaxed">
            Thanks for taking the time to check out some of the projects that
            I've worked on.
          </p>

          {/* <div className="flex justify-center"> */}

          {/* <a
              href="#contact"
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              See My Past Work
            </a> */}
        </div>
      </div>
    </section>
  );
}
