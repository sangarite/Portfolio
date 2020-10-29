import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import not_found from '../assets/img/not_found.svg';
import './NotFound.css';

class NotFound extends Component {
    render() {
      return (
        <div className="footer">
          <Nav/>
            <img src={not_found} alt="404" />
          <Footer/>
        </div>
      );
    }
  }

  export default  NotFound;
