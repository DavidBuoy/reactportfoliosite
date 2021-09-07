import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            David Bushard
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <div className="icon-spacing">
            <h2>GitHub</h2>
            <a
              href="https://github.com/DavidBuoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="icon-spacing">
            <h2>Design</h2>
            <a
              href="https://www.behance.net/davidbushard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-behance"></i>
            </a>
          </div>
          <div className="icon-spacing">
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/davidbushard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
