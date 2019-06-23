import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';

class SeekerSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      website:"",
      resume:"",
      notice_period:"",
      experience: "",
      current_title: "",
      employer: false
    };
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getPassword_confirmation = this.getPassword_confirmation.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getWebsite = this.getWebsite.bind(this);
    this.getResume = this.getResume.bind(this);
    this.getNotice = this.getNotice.bind(this);
    this.getExperience = this.getExperience.bind(this);
    this.getCurrentTitle = this.getCurrentTitle.bind(this);
    this.signup = this.signup.bind(this);
    //this.saveUser = this.saveUser.bind(this);
  }
  getName(event) {
      this.setState({
        name: event.target.value
      });
    }

    getEmail(event) {
      this.setState({
        email: event.target.value
      });
    }

    getPassword(event) {
      this.setState({
        password: event.target.value
      });
    }

    getPassword_confirmation(event) {
      this.setState({
        password_confirmation: event.target.value
      });
    }

    getPhone(event) {
      this.setState({
        phone: event.target.value
      });
    }

    getWebsite(event) {
      this.setState({
        website: event.target.value
      });
    }

    getResume(event) {
      this.setState({
        resume: event.target.value
      });
    }

    getNotice(event) {
      this.setState({
        notice_period: event.target.value
      });
    }

    getExperience(event) {
      this.setState({
        experience: event.target.value
      });
    }

    getCurrentTitle(event) {
      this.setState({
        current_title: event.target.value
      });
    }
    signup(event) {
        event.preventDefault();
        axios
          .post("https://server-job-board.herokuapp.com/users.json", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            phone: this.state.phone,
            website: this.state.website,
            resume: this.state.resume,
            notice_period: this.state.notice_period,
            experience: this.state.experience,
            current_title:this.state.current_title,
            employer:this.state.employer


          })
          .then(result => {
            console.log(result);

            this.props.history.push("/"); ////
          });
      }



  render(){

    return(

      <div >
        <Nav />
        <div className="grid-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.signup}>
          <input
            className="signup-input"
            type="text"
            value={this.state.name}
            onChange={this.getName}
            placeholder="Name"
          />
          <br/>

          <input
            className="signup-input"
            type="text"
            value={this.state.email}
            onChange={this.getEmail}
            placeholder="E-mail"
          />
          <br/>

          <input
            className="signup-input"
            type="password"
            value={this.state.password}
            onChange={this.getPassword}
            placeholder="Password"
          />
          <br/>

          <input
            className="signup-input"
            type="password"
            value={this.state.password_confirmation}
            onChange={this.getPassword_confirmation}
            placeholder="Confirm Password"
          />
          <br/>


          <input
            className="signup-input"
            type="number"
            value={this.state.phone}
            onChange={this.getPhone}
            placeholder="phone no."
            />
            <br/>

          <input
            className="signup-input"
            type="text"
            value={this.state.website}
            onChange={this.getWebsite}
            placeholder="website link"
            />
            <br/>

            <input
              className="signup-input"
              type="text"
              value={this.state.notice_period}
              onChange={this.getNotice}
              placeholder="notice period"
              />
              <br/>

          <input
            className="signup-input"
            type="number"
            value={this.state.experience}
            onChange={this.getExperience} min="0"
            placeholder="experience years"
            />
            <br/>
          <input
            className="signup-input"
            type="text"
            value={this.state.current_title}
            onChange={this.getCurrentTitle}
            placeholder="current title"
            />
            <br/>

          <button className="signup-btn" type="submit" value="">
            {" "}
            Sign Up
          </button>
        </form>
      </div>


        <Footer />
      </div>
    );
  }
};

export default SeekerSignUp;
