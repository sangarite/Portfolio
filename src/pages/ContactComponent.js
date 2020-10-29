import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import contact from '../assets/img/contact.svg'


class Contact extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
            <div className="text-part" >
              <div className="text">
                <p>write something over here</p>
                <Sm />
              </div>
            </div>
              <div className="img-part" >
                <img src={contact} alt="about" />
              </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }

  export default Contact;
