import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';

class EmployerSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      //password_confirmation: "",
      phone: "",
      website:"",
      company_size: "",
      company_type: "",
      description: "",
      ABN: "",
      image: "",
      //resume:"",
      // notice_period:"",
      // experience: "",
      // current_title: "",
      employer: true
    };
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    // this.getPassword_confirmation = this.getPassword_confirmation.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getWebsite = this.getWebsite.bind(this);
    this.getCompany_size = this.getCompany_size.bind(this);
    this.getCompany_type = this.getCompany_type.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getABN = this.getABN.bind(this);
    this.getImage = this.getImage.bind(this);
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

    // getPassword_confirmation(event) {
    //   this.setState({
    //     password_confirmation: event.target.value
    //   });
    // }

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

    getCompany_size(event) {
      this.setState({
        company_size: event.target.value
      });
    }

    getCompany_type(event) {
      this.setState({
        company_type: event.target.value
      });
    }

    getDescription(event) {
      this.setState({
        description: event.target.value
      });
    }

    getABN(event) {
      this.setState({
        ABN: event.target.value
      });
    }

    getImage(event) {
      this.setState({
        image: event.target.value
      });
    }


    signup(event) {
        event.preventDefault();
        axios
          .post("https://server-job-board.herokuapp.com/users.json", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // password_confirmation: this.state.password_confirmation,
            phone: this.state.phone,
            website: this.state.website,
            company_type: this.state.company_type,
            company_size: this.state.company_size,
            description: this.state.description,
            ABN:this.state.ABN,
            image: this.state.image,
            employer:this.state.employer


          })
          .then(result => {
            console.log(result);

            this.props.history.push("/"); ////
          });
      }


  render(){
    return(

      <div>
        <Nav />
        <div className="grid-container container">
        <h3>Sign Up</h3>
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
            value={this.state.company_size}
            onChange={this.getCompany_size}
            placeholder="size of company"
            />
            <br/>

            <input
              className="signup-input"
              type="text"
              value={this.state.company_type}
              onChange={this.getCompany_type}
              placeholder="type of company"
              />
              <br/>

          <input
            className="signup-input"
            type="textarea"
            value={this.state.description}
            onChange={this.getDescription}
            placeholder="describe your company"
            />
            <br/>

          <input
            className="signup-input"
            type="text"
            value={this.state.ABN}
            onChange={this.getABN}
            placeholder="ABN"
            />
            <br/>

            <input
              className="signup-input"
              type="text"
              value={this.state.image}
              onChange={this.getImage}
              placeholder="http"//..."
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

export default EmployerSignUp;
