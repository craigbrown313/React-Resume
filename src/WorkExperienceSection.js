import React, { Component } from 'react';

class WorkExperienceSection extends Component {
  render() {
    return (
      <div className="work-entry">
        <div className="location-text">{this.props.location}</div>
        <p className="company-name">{this.props.company}</p>
        <div className="date-text">{this.props.date}</div>
        <p><br/>{this.props.desc}</p>
      </div>
    );
  }
}

export default WorkExperienceSection;
