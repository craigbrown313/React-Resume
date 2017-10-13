import React, { Component } from 'react';
class FooterSection extends Component {

  render() {
    return (
      <div id="lets-connect" className="dark-gray">
          <h2 className="orange center-text">"Let's Connect"</h2>
          <ul id="footerContacts" className="flex-box">
          <li className="flex-item"><span classNames="orange-text">email</span>
          <span className="white-text"><a href="mailto:craigbrown313@gmail.com">craigbrown313@gmail.com</a></span>
          </li><li className="flex-item"><span className="orange-text">github</span>
          <a href="https://github.com/craigbrown313">https://github.com/craigbrown313</a></li><li class="flex-item"><span class="orange-text">location</span><a href="https://www.google.com/maps/place/Cincinnati,+OH/@39.1362562,-84.6804857,11z/data=!3m1!4b1!4m5!3m4!1s0x884051b1de3821f9:0x69fb7e8be4c09317!8m2!3d39.1031182!4d-84.5120196">Cincinnati, OH, United States</a></li></ul>
              </div>

        );
      }

    }

    export default FooterSection;
