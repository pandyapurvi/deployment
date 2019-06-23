import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

class Logout extends Component {
  constructor() {
    super();
    UserProfile.setName('');
    UserProfile.setEmail('');
    UserProfile.setUserId(-1);
    //UserProfile.setAdmin(false);


    if (typeof (Storage) !== "undefined") {
      localStorage.clear();
    }

    let urlstr = window.location.href;
    if (urlstr.includes('#')) {
      urlstr = urlstr.split('#')[0] + '#/'
    }
    console.log(urlstr);
    window.location.replace(urlstr);
  }
  render() {
    return (
      "/"
    );
  }
}

export default Logout;
