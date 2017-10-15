import React, { Component } from 'react';
import ProjectsSection from './ProjectsSection.js'
import projectImage from './frogger.png';
import projectImage1 from './responsive1.png'

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
              date="April 2016 to August 2017"
              desc="Created an online portfolio using HTML5, CSS3, and Bootstrap as an project forb a responsive web design portfolio."
            />
              <div><img src={projectImage1}/></div>
      </div>
    );
  }
}

export default Projects;
