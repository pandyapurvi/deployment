import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

class Aboutme extends Component {
  render(){
    return(

      <div>
        <Nav/>
          <h3>About me</h3>
          <p>Hi There! I am a sofware developer and enjoy making differernt kind of website. This is my dream to make a job-board website application. I have used react.js a front-end frame work. I am open to any feedback.</p>

          <li className="about">Sydney | NSW</li>
          <li className="about"><a href="tel:1-212-555-5555" title="Give me a call">(043) 2912-432</a></li>
          <li className="about"><a href="mailto:#" title="Send me an email">pandyapurvi13@gmail.com</a></li>
          <li className="about"><a href="https://github.com/pandyapurvi" target="_blank" ><img src="https://cdn.dribbble.com/users/8063/screenshots/873671/github_icon_vector_shape.png" height="100" width="100"/></a></li>
          <li className="about"><a href="https://www.linkedin.com/in/pandyapurvi/" target="_blank"><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/a5/1a/05/a51a055e-a887-8b09-45c2-ad8e36bc0285/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/1200x630wa.png" height="100" width="100"/></a></li>


          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED
          </div>
          <Footer/>
        </div>

    )
  }
};
export default Aboutme;
