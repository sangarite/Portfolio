import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import project from '../assets/img/project.svg'
import Card from '../components/Card'
import {projects} from '../projects'

class Project extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
            <div className="text-part" >
              <div className="text">
                <h1>My Project List</h1>
                <div>Write somethng about all of the projects</div>
              </div>
            </div>
            <div className="img-part" >
              <img src={project} alt="project" />
            </div>
          </div>
          <br/>
          <h1>My Project Sample</h1>
          <Card />
          <Footer/>
        </div>
      );
    }
  }

export default Project;
