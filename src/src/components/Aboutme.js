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
        <div className="container aboutme">
          <h3>About me</h3>
          <p><em>Hi There! I am a sofware developer and enjoy making differernt kind of website. This is my dream to make a job-board website application. I have used react.js a front-end frame work. I am open to any feedback.</em></p>

          <li className="about">Sydney | NSW</li>
          <li className="about"><a href="tel:1-212-555-5555" title="Give me a call">(043) 2912-432</a></li>
          <li className="about"><a href="mailto:pandyapurvi13@gmail.com" title="Send me an email">pandyapurvi13@gmail.com</a></li>
          <br></br>
          <li className="about"><a href="https://github.com/pandyapurvi" target="_blank" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9OEYLj6VT6yKV0lolu62aN0F-4l_EU4ql791SzdxR9zW_rbI" height="100" width="100"/></a></li>
          <li className="about"><a href="https://www.linkedin.com/in/pandyapurvi/" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" height="100" width="100"/></a></li>


          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED
          </div>
          </div>
          <Footer/>
        </div>

    )
  }
};
export default Aboutme;
