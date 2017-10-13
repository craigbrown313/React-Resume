import React, { Component } from 'react';

class EducationSection extends Component {
  render() {
    return (
          <div className="education-entry">
          <a href="http://ccuniversity.edu/">{this.props.school}</a>
          <div className="date-text">{this.props.date}</div>
          <div className="location-text">{this.props.location}</div>
          <em><br/>{this.props.major}</em>
          <a href="https://www.udacity.com/">{this.props.school1}</a>
          <a href="https://www.udacity.com/">{this.props.course1}</a>
          <div className="date-text">{this.props.date1}</div>
          <a href="https://www.udacity.com/">{this.props.link}</a>
          </div>
    );
  }
}

export default EducationSection;
