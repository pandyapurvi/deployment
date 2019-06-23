// import React, { Component } from "react";
// import axios from "axios";
// // import {ApolloProvider, ApolloConsumer, createNetworkInterface} from 'react-apollo'
// import Router from "react-router-dom";

import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const baseURL = "https://server-job-board.herokuapp.com/users.json";
    let user_id = -1;
    let userDetail = null;

    axios.get(baseURL).then((result) =>{

      const userslist = result.data;
        console.log(this.state.email);
        console.log(userslist);
        for (let i=0; i<userslist.length; i++) {
          if (userslist[i].email === this.state.email) {
            user_id = userslist[i].id;
            userDetail = userslist[i];
            break;
          }
        }
        console.log(user_id);
      if (user_id > 0) {
        UserProfile.setName(userDetail.name);
        UserProfile.setUserId(user_id);
        UserProfile.setEmployer(userDetail.employer);
        UserProfile.setEmail(userDetail.email);

        let urlstr = window.location.href;
        if (urlstr.includes('#')) {
          urlstr = urlstr.split('#')[0] + '#/'
        }
        window.location.replace(urlstr);
      }
    });

  }

  render() {
    return (
      <div>
      <Nav />
      <header className="login">
      <h1>Login</h1>
      <p>Welcome Back! New to the site?</p>
      <Link to={"/seekersignup"} className="signup-link"><p>Signup here if you are a Seeker</p></Link>
      <Link to={"/employersignup"} className="signup-link"><p>Signup here if you are an Employer</p></Link>

      <form onSubmit={this.handleSubmit} action="/">
      <FormGroup controlId="email" bsSize="large">
      <span style={{color: 'black'}}></span>
      <FormControl
      autoFocus
      type="email"
      placeholder="Your email address"
      value={this.state.email}
      onChange={this.handleChange}
      className="login-input"
      />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
      <span style={{color: 'black'}} ></span>
    <br/>
      <FormControl
      value={this.state.password}
      onChange={this.handleChange}
      type="password"
      placeholder="Password"
      className="login-input"
      />
      </FormGroup>
      <Button
      block
      bsSize="large"
      disabled={!this.validateForm()}
      type="submit"
      className="login-btn"
      >
      Login
      </Button>
      </form>
      </header>
      <Footer />
      </div>
    );
  }
}



// const SERVER_URL = "http://localhost:3000/users.json";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//         users: []
//     };
//
//     this.getEmail = this.getEmail.bind(this);
//     this.getPassword = this.getPassword.bind(this);
//     //this.login = this.login.bind(this);
//     this.loginfetch = this.loginfetch.bind(this);
//     // this.gettingUserInfo = this.gettingUserInfo.bind(this)
//     this.routeChange = this.routeChange.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }
//
//   // gettingUserInfo(){
//   //   console.log('userinfo fired');
//   //   axios.get('http://localhost:3333/user/info', {withCredentials: true}).then((result)=>{ //need option?
//   //     console.log('!!!!!!!!!axios result for userinfo fired: ', result);
//   //   })
//
//   // }
//
//   routeChange() {
//     let path = `/signup`;
//     this.props.history.push(path);
//   }
//
//   getEmail(event) {
//     this.setState({
//       email: event.target.value
//     });
//   }
//
//   getPassword(event) {
//     this.setState({
//       password: event.target.value
//     });
//   }
//   _handleSubmit(event){
//     event.preventDefault();
//     console.log("hi");
//
//     this.loginfetch(this.state.email, this.state.password);
//   }
//   // login(event) {
//   //   event.preventDefault();
//   //   console.log("Email " + this.state.email, "Password " + this.state.password);
//   //
//   //   axios
//   //     .post(
//   //       SERVER_URL,
//   //       { email: this.state.email, password: this.state.password }
//   //       // { withCredentials: true }
//   //     )
//   //     .then(result => {
//   //       console.log("here is what is going on result 1111", result); // this is the right one
//   //       console.log("here is what is going on result.data 1111", result.data); // this is the right one
//   //       console.log(
//   //         "here is what is going on result.data.data 1111",
//   //         result.data.data
//   //       );
//   //       // console.log('here is what is going on data.request.response', result["request"])
//   //       //result should be session
//   //
//   //       // this.props.history.push("/");
//   //     })
//   //     .then(result => {
//   //       console.log("here is  what is going on 22:", result);
//   //     })
//   //     .then(aa => {
//   //       console.log("getting info fired");
//   //       // this.gettingUserInfo()
//   //     })
//   //     .then(aa => {
//   //       console.log("getting info fired");
//   //       // this.gettingUserInfo()
//   //     });
//   //     setTimeout(()=>{
//   //       this.props.history.push("/");
//   //     }, 1000)
//   //
//   // }
//   loginfetch = (u, p) => {
//     let username = u;
//     let password = p;
//       console.log("Username:" + username + " Password:" + password);
//     axios.get('http://localhost:3000/users.json').then((results) => {
//       //console.log(results.data);
//       const users_data = results.data;
//       const listUser = [];
//         for (let i = 0; i < users_data.length; i++) {
//           const userData = users_data[i];
//           console.log("In Loop: email: " + userData.email + " Password: " + userData.password_digest);
//           if ( userData.email === username && userData.password === password){
//             console.log("userData:" + userData);
//             listUser.push(userData);//All jobs
//           }
//           // else if (city!== '' && title === '') {
//           //   if ( jobData.city !==null && jobData.city === city){
//           //     listJobs.push(jobData);//All city and jobs
//           //   }
//           // } else if ( city === '' && title !== null){
//           //   if( jobData.title!== null && jobData.title === title){
//           //     listJobs.push( jobData )//All city and selected title
//           //   }
//           // } else  {
//           //   if ((jobData.city === city) && (jobData.title === title)){
//           //     listJobs.push( jobData );//selected title  and selected city
//           //   }
//           // }
//         }
//         this.setState({users: listUser});
//     })
//   }
//
//
//   render() {
//     return (
//       <>
//         <div className="login-container">
//           <h2>Login</h2>
//           <form className="login-form" onSubmit={this._handleSubmit}>
//             <input
//               className="email-login-input"
//               type="text"
//               value={this.state.email}
//               onChange={this.getEmail}
//               placeholder="E-mail"
//             />
//             <input
//               className="password-login-input"
//               type="password"
//               value={this.state.password}
//               onChange={this.getPassword}
//               placeholder="Password"
//             />
//             <button className="login-page-button" type="submit" value="Login">
//               Login
//             </button>
//           </form>
//           <span className="dont-have">
//             Dont have an account yet?
//             <button
//               className="login-page-signup-button"
//               onClick={this.routeChange}
//             >
//               Sign up here
//             </button>
//           </span>
//         </div>
//       </>
//     );
//   }
// }
//
 // export default Login;
