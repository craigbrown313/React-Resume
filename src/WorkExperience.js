import React, { Component } from 'react';
import WorkExperienceSection from './WorkExperienceSection.js'

class WorkExperience extends Component {
  render() {
    return (
      <div id="workExperience" className="gray">
        <h2>Work Experience</h2>
        <WorkExperienceSection
          location="Cincinnati, Ohio, United States"
          company="Triple E Partners - Senior IT Recruiter"
          date="September 2016 - December 2016"
          desc="Up to date knowledge in front-end Web Development Utilizing HTML, CSS3, and JavaScript. Operated as Information Technology recruiter, scoring candidates involved in the SDLC. Sourced candidates for jobs in the technical field with major corporations. Interviewed and prepped candidates for potential job openings. Consulted with HR firms on the best possible applicants and salary negotiations."
        />
        <WorkExperienceSection
          location="Cincinnati, Ohio, United States"
          company="Edis Group - Executive IT Recruiter"
          date="April 2016 to August 2017"
          desc="Full life cycle recruiting for all Information Technology and specialized related positions. Utilized best practices to source, and meet candidates. Considered responsible by means of set up selecting measurements: time to fill, cost per contract, nature of contract, client administration amid contract with trough and candidate. In charge of counseling with Managers, AVPs, VPs, CIO and proper Human Resource Managers all through the enlisting procedure, giving point-by-point evaluations of all hopefuls sourced. Complete uncommon selecting related undertakings for the HR and IT Departments as required."
        />
      </div>
    );
  }
}

export default WorkExperience;
