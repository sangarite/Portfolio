import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import education from '../assets/img/education.svg';
import './education.css';

class Education extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
            <div className="text-part" >
              <div className="text">
                <h1>Write about all of my studies</h1>
                  <div className="edu">
                    <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> </h3>
                    <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> </h3>
                    <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> </h3>
                  </div>
                  <br/>
                  <br/>
              </div>
            </div>
            <div className="img-part" >
              <img src={education} alt="about" />
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }

  export default Education;
