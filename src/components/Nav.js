import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import UserProfile from './UserProfile';
class Nav extends Component {
  render() {
    if (UserProfile.getEmail() === "") {
      // not logged in

    return (
      <div>
      <nav>
        <ul>
          <li className="nav"><img src="http://blog.hireup.com.au/wp-content/uploads/2016/08/JOB_BOARD_blog.jpg" height="50" width="100"/></li>
          <li><Link to={"/"} className="nav">Jobs</Link></li>
          <li><Link to={"/aboutme"} className="nav">About Me</Link></li>
          <li><Link to={"/login"} className="nav">Login</Link></li>

        </ul>
      </nav>
      </div>
    )
  }else{
    const isEmployer = UserProfile.getEmployer();
    const takeID = UserProfile.getUserId();
    const greeting = UserProfile.getName();
    console.log("greeting name: "+ greeting);
    return (
      <div>
      <nav>
        <ul>
          <li className="nav"><img src="http://blog.hireup.com.au/wp-content/uploads/2016/08/JOB_BOARD_blog.jpg" height="50" width="100"/></li>
          <li ><Link to={"/"} className="nav">Jobs</Link></li>
          <li ><Link to={"/aboutme"} className="nav">About Me</Link></li>
          <li ><Link to={"/logout"} className="nav">LogOut</Link></li>
          {
          isEmployer
          ?
          <li ><Link to={"/newjob"}className="nav">Post a Job</Link></li>
          : ''
        }
          <li><Link to= {"/seeker/" + takeID} className="nav" >Welcome {greeting}</Link></li>
        </ul>
      </nav>
      </div>
    )

  }
  }
};

export default Nav;
