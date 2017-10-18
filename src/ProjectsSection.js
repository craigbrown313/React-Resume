import React, { Component } from 'react';
import projectImage from './frogger.png';
import projectImage1 from './responsive1.png'
import projectImage2 from './resume.png'
class ProjectsSection extends Component {
  render() {
    return (
      <div className="project-entry">
      <a href="https://arcade-1fcce.firebaseapp.com/">{this.props.course}</a>
      <a href="https://craigbrown313.github.io/responsive1/">{this.props.course1}</a>
      <a href="https://craigbrown313.github.io/Resume11/">{this.props.course2}</a>
      <div className="date-text">{this.props.date}</div>
      <p><br/>{this.props.desc}</p>


      </div>
    );
  }
}

export default ProjectsSection;
