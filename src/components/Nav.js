import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import './nav.css'

class Nav extends Component {
    render() {
      return (
        <div>
          <header className="header">
            <ul>
              <li> <NavLink to="/" tag={Link}>Home</NavLink>               </li>
              <li> <NavLink to="/about" tag={Link}>About</NavLink>         </li>
              <li> <NavLink to="/education" tag={Link}>Education</NavLink> </li>
              <li> <NavLink to="/projects" tag={Link}>Projects</NavLink>   </li>
              <li> <NavLink to="/skills" tag={Link}>Skills</NavLink>       </li>
              <li> <NavLink to="/contact" tag={Link}>Contact Me</NavLink>  </li>
            </ul>
          </header>
        </div>
      );
    }
  }

  export default Nav;
