import React from "react";
import "./style.css";
import aboutPic from "../../img/me.jpeg";
export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="about-grid">
          <div className="">
            <h1 className="about-header">Hi, Im David</h1>
            <p className="">
              I have a background in web development and graphic design. For the
              last six months, I have been attending the University of Denver's
              Full-Stack Bootcamp.
              <br />I have learned a lot through the course and am now looking
              to make an entry into the Web Development field. I also have
              experience working with different mediums including screen
              printing, vinyl all the way to shooting and editing video. I enjoy
              being creative and learning new things while working with others
              to make awesome content!
            </p>
          </div>

          <div>
            <img className="image" src={aboutPic} alt="" srcset="" />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-4 font-medium text-white">Hi, I'm David.</h1>
          <p className="mb-8 leading-relaxed">
            Hi, I'm David. I have a background in web development and graphic
            design. For the last six months, I have been attending the
            University of Denver's Full-Stack Bootcamp.
            <br />I have learned a lot through the course and am now looking to
            make an entry into the Web Development field. I also have experience
            working with different mediums including screen printing, vinyl all
            the way to shooting and editing video. I enjoy being creative and
            learning new things while working with others to make awesome
            content!
          </p>
        </div>
        <div>
          <img className="image" src="../../img/me.jpeg" alt="" srcset="" />
        </div>
      </div>
      <div className="image"></div> */}
    </section>
  );
}
