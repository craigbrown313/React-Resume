import React, { Component } from 'react';
import ProjectsSection from './ProjectsSection.js'
import projectImage from './frogger.png'
import projectImage1 from './responsive1.png'
import projectImage2 from './resume.png'

class Projects extends Component {
  render() {
    return (
      <div id="projects">
            <h2>Projects</h2>
            <ProjectsSection
              course ="JavaScript Frogger Game"
              date="April 2016 to August 2017"
              desc="Created an online game using JavaScript Object-Oriented programming and HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree."
            />

            <div><img src={projectImage}/></div>
            <ProjectsSection
              course1 ="Portfolio"
              date="March 2017 to August 2017"
              desc="Created an online portfolio using HTML5, CSS3, and Bootstrap as a project for a responsive web design portfolio."
            />

            <div><img src={projectImage1}/></div>
            <ProjectsSection
              course2 ="Resume w/ JavaScript"
              date="March 2017 to August 2017"
              desc="Created an interactive resume utiizing JavaScript Object-Oriented programming as a project."
            />
              <div><img src={projectImage2}/></div>
      </div>
    );
  }
}

export default Projects;
