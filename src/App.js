import React, { Component } from 'react';
import './App.css';
import Footer from  './Footer.js'
import Header from './Header.js'
import WorkExperience from './WorkExperience.js'
import Projects from './Projects.js'
import Education from './Education.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <Education></Education>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
