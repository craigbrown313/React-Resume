import React, { Component } from 'react';
import projectImage from './frogger.png';
import projectImage1 from './web.png'
class ProjectsSection extends Component {
  render() {
    return (
      <div className="project-entry">
      <a href="https://github.com/craigbrown313/Arcade">{this.props.course}</a>
      <a href="https://github.com/craigbrown313">{this.props.course1}</a>
      <div className="date-text">{this.props.date}</div>
      <p><br/>{this.props.desc}</p>

    
      </div>
    );
  }
}

export default ProjectsSection;