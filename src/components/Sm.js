import React, { Component } from "react";
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import gmail from '../assets/img/gmail.svg';
import './sm.css'

class Sm extends Component {
    render() {
      return (
        <div className="sm">
            <a className="sm-item" href="https://www.linkedin.com/in/ruchama-diamond-7935471b8"><img src={linkedin} alt="linkedin" /></a>
            <a className="sm-item" href="https://www.github.com/sangarite"><img src={github} alt="github" /></a>
            <a className="sm-item" href="mailto:ruchama355@gmail.com"><img src={gmail} alt="gmail" /></a>
        </div>
      );
    }
  }

  export default Sm;
