import React, { Component } from 'react';
import profileImage from './profile.png';

class Header extends Component {

  render() {
    return (
      <div id="header" className="center-content clear-fix">
        <h1>Craig Brown</h1>
        <span>Web Developer</span>
        <hr/>
        <ul id="topContacts" className="flex-box">
          <li className="flex-item">
            <span className="orange-text">email</span>
            <span className="white-text"><a href="mailto:craigbrown313@gmail.com">craigbrown313@gmail.com</a></span>
          </li>
          <li className="flex-item">
            <span className="orange-text">github</span>
            <a href="https://github.com/craigbrown313">https://github.com/craigbrown313</a>
          </li>

          <li className="flex-item">
            <span className="orange-text">location</span>
            <span className="white-text"><a href="https://www.google.com/maps/place/Cincinnati,+OH/@39.1362562,-84.6804857,11z/data=!3m1!4b1!4m5!3m4!1s0x884051b1de3821f9:0x69fb7e8be4c09317!8m2!3d39.1031182!4d-84.5120196">Cincinnati, OH, United States</a></span>
          </li>
        </ul>
        <img src={profileImage} className="biopic"/>
        <span className="welcome-message">I am currently seeking entry-lelvel employment in Web Development in the Cincinnati market. I have spent the last 6 months honing my skills in the Udacity front-end web development course where I have gained great expeireince thoughout my classes and projects. I am now ready to take my skills to the next level to add immediate value in the corporate world.</span>
        <h3 id="skills-h3">Skills at a Glance:</h3>
        <ul id="skills" className="flex-column"><li className="flex-item"><span className="white-text">HTML</span></li><li className="flex-item"><span className="white-text">JavaScript</span></li><li className="flex-item"><span className="white-text">CSS</span></li><li className="flex-item"><span className="white-text">jQuery</span></li><li className="flex-item"><span className="white-text">AngularJS</span></li><li className="flex-item"><span className="white-text">React</span></li><li className="flex-item"><span className="white-text">jSon</span></li></ul>
      </div>
    );
  }

}

export default Header;
