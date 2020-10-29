import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import DevTool from '../components/DevTool';
import skills from '../assets/img/skills.svg'

class Skills extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
            <div className="text-part" >
              <div className="text">
                <h1>Full Stack Development</h1>
                <DevTool />
              </div>
            </div>
            <div className="img-part" >
              <img src={skills} alt="Skills" />
            </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }

  export default Skills;
