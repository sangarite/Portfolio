import React, { Component } from "react";
import welcome from '../assets/img/welcome.svg';
import occupation from '../assets/img/occupation.svg';
import Sm from './Sm';
import DevTool from './DevTool';
import './main.css'

class Main extends Component {
    render() {
      return (
        <div>
          <div className="main">
            <div className="text-part">
              <div className="text">
                <h1>Hi, I'm Ruchama Diamond</h1>
                <p>Full Stack Developer</p>
                <Sm />
              </div>
            </div>
            <div className="img-part">
              <img src={welcome} alt="welcome"/>
            </div>
          </div>
          <h1>What I Do?</h1>
          <div className="main">
            <div className="img-part">
              <img src={occupation} alt="what_i_do"/>
            </div>
            <div className="text-part">
              <div className="text">
                <h2>Full Stack Development</h2>
                <p> <span role="img" aria-label="Heart">⚡</span> Building resposive website front end using React-Redux</p>
                <p> <span role="img" aria-label="Heart">⚡</span> Creating application backend in Node & Express</p>
                <p> <span role="img" aria-label="Heart">⚡</span> Write an other thing</p>
                <DevTool />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Main;
