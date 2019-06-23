import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';
import cloudinary from 'cloudinary-core';

class Apply extends Component {
  constructor() {
    super();
    this.state = {
      application: [],
      resumeURL: '',
    }
    this.saveJob = this.saveJob.bind(this);

    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'drgwrxu6l',
      uploadPreset: 'wstkmhtq'},
      (error, result) => {
        if (result.event === 'success') {
          this.setState({resumeURL: result.info.secure_url})
        }

      })

  }

  saveJob( application_date, cover_letter) {
    const resume = this.state.resumeURL
    const user_id = UserProfile.getUserId();
    const job_id = this.props.match.params.id;
    console.log("Userid: " + user_id);
    console.log("Jobid: " + job_id);
    axios.post("https://server-job-board.herokuapp.com/applications.json", {user_id: user_id, job_id: job_id, application_date:application_date, resume:resume, cover_letter:cover_letter}).then((result) => {
      console.log("result.data : " + result.data);
      let urlstr = window.location.href;
      //let urlstr = "http://localhost:3001/?#/";
      console.log("urlstr: " + urlstr);
      if (urlstr.includes('#')) {
        urlstr = urlstr.split('#')[0] + '/'
      }
      window.location.replace(urlstr);
      this.setState({application: [...this.state.application, result.data]})


      this.props.history.push("/");

    });

  }


  showWidget = () => {
    this.widget.open()
  }
  checkUploadResult = (resultEvent) => {
    if (resultEvent.event==='success') {
      console.log(resultEvent);
      // this.saveResume({resultEvent.secure_url})
    }
  }

  render() {

    return (
      <div>
        <Nav/>
          <h3>Job Application</h3>
          <button onClick={this.showWidget} className="resume">Upload Resume</button>
        <CreateForm onSubmit={this.saveJob}/>
        <Footer/>
      </div>
    )
  }
};

class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      application_date:'',
      resume:'',
      cover_letter: ''
    }

    this._handleInputApplication_date = this._handleInputApplication_date.bind(this);
    this._handleInputResume = this._handleInputResume.bind(this);
    this._handleInputCover_letter = this._handleInputCover_letter.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputApplication_date(event) {
    console.log(event.target.value);
    this.setState({application_date: event.target.value})
  };
  _handleInputResume(event) {
    console.log(event.target.value);
    this.setState({resume: event.target.value})
  };

  _handleInputCover_letter(event) {
    console.log(event.target.value);
    this.setState({cover_letter: event.target.value})
  };

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.application_date, this.state.resume, this.state.cover_letter);


  }
  render () {

    return (
      <div className="grid-container">
      <form onSubmit={this._handleSubmit} >

      <label className="item">Cover letter:</label>
      <textarea onInput={this._handleInputCover_letter}/>
      <br /><br/>

      <label className="item">Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="date" onInput={this._handleInputApplication_date}/>
      <br/><br/>
      <button type="submit" className="apply-btn">Apply</button>

      </form>
      </div>

    );
  }
};

export default Apply;
