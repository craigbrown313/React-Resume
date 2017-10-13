import React, { Component } from 'react';
import EducationSection from './EducationSection.js'

class Education extends Component {
  render() {
    return (
      <div id="education" className="gray">
            <h2>Education</h2>
            <EducationSection
              school="Cincinnati Christian University: Bachelors"
              date="September 2014 - May 2017"
              location="Cincinnati, Ohio, United States"
              major="Business"
              />

            <EducationSection
              school1= "Udacity"
              classes="Online Classes"
              course1 ="Front-End Web Developer: Nanodegree"
              link="www.udacity.com"
            />
            </div>
    );
  }
}

export default Education;
