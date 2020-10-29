import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import about from '../assets/img/about.svg'

class About extends Component {
    render() {
      return (
        <div>
          <Nav />
          <div className="main">
            <div className="text-part">
              <div className="text">
                <h1>Hi, I'm Ruchama Diamond</h1>
                <p> I'm a student from the college of managment</p>
                <p>I’m currently learning Full Stack Development.</p>
                <p>I’m currently working with Node.js, Express.js, React, Javascript, etc</p>
                <p>I am From Jerusalem</p>
                <br /><br /><br />
                <p>Change all of this part and write something real about yourself</p>
                <p>I am From Jerusalem</p>
                <p>Change all of this part and write something real about yourself</p>
              </div>
            </div>
            <div className="img-part">
              <img src={about} alt="about" />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }

  export default About;
