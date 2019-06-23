import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

class NewJob extends Component {
  constructor(){
    super();
    this.state = {
      newJob : []
    }
    this.saveJob = this.saveJob.bind(this);
  }

  saveJob( title, post_date, description, level, company_type, job_type, salary, city, close_date) {
    const user_id = UserProfile.getUserId();
    axios.post("https://server-job-board.herokuapp.com/jobs.json", {title:title, post_date:post_date, description:description, level:level, company_type:company_type, job_type:job_type, salary:salary, city:city, close_date:close_date, user_id: user_id}).then((result) => {
      this.setState({newJob: [...this.state.newJob, result.data]})
      console.log(result.data);

      this.props.history.push("/");
    });

  }

  render(){
    // const admin = UserProfile.isAdmin() === true;
    if (true) {
      return(
        <div>
        <Nav/>
        <h3 >New Job</h3>
        <CreateForm onSubmit={this.saveJob}/>
        <Footer/>
        </div>
      )
    }

  }
};


class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      post_date: '',
      description: '',
      company_type: '',
      level: '',
      job_type: '',
      salary: '',
      city: '',
      close_date: ''
    }


    this._handleInputTitle = this._handleInputTitle.bind(this);
    this._handleInputPost_date = this._handleInputPost_date.bind(this);
    this._handleInputDescription = this._handleInputDescription.bind(this);
    this._handleInputCompany_type = this._handleInputCompany_type.bind(this);
    this._handleInputLevel = this._handleInputLevel.bind(this);
    this._handleInputJob_type = this._handleInputJob_type.bind(this);
    this._handleInputSalary = this._handleInputSalary.bind(this);
    this._handleInputCity = this._handleInputCity.bind(this);
    this._handleInputClose_date = this._handleInputClose_date.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleInputTitle(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value})
  };
  _handleInputPost_date(event) {
    console.log(event.target.value);
    this.setState({post_date: event.target.value})
  };

  _handleInputDescription(event) {
    console.log(event.target.value);
    this.setState({description: event.target.value})
  };

  _handleInputCompany_type(event) {
    console.log(event.target.value);
    this.setState({company_type: event.target.value})
    console.log(this.state.price)
  };

  _handleInputLevel(event) {
    console.log(event.target.value);
    this.setState({level: event.target.value})
  };

  _handleInputJob_type(event) {
    console.log(event.target.value);
    this.setState({job_type: event.target.value})
  };

  _handleInputSalary(event) {
    console.log(event.target.value);
    this.setState({salary: event.target.value})
  };

  _handleInputCity(event) {
    console.log(event.target.value);
    this.setState({city: event.target.value})
  };

  _handleInputClose_date(event) {
    console.log(event.target.value);
    this.setState({close_date: event.target.value})
  };

  _handleSubmit(event){
    event.preventDefault();
    // console.log("hi");
    this.props.onSubmit(this.state.title, this.state.post_date, this.state.description, this.state.company_type, this.state.level, this.state.job_type, this.state.salary, this.state.city, this.state.close_date);


  }
  render () {

    return (
      <div className="grid-container">
      <form onSubmit={this._handleSubmit} >
      <label >Job Title:</label><br/>
      <input type="text" onInput={this._handleInputTitle} className="grid-input"/>
      <br />

      <label >Post Date:</label><br/>
      <input type="date" onInput={this._handleInputPost_date} className="grid-input"/>
      <br />

      <label >Description:</label><br/>
      <textarea onInput={this._handleInputDescription} className="grid-input"/>
      <br />

      <label>Type of Company:</label><br/>
      <input type="text" onInput={this._handleInputCompany_type} className="grid-input"/>
      <br />

      <label>Level:</label><br/>
      <input type="text" onInput={this._handleInputLevel} className="grid-input"/>
      <br />

      <label>Type of Job:</label><br/>
      <input type="text" onInput={this._handleInputJob_type} className="grid-input"/>
      <br />

      <label>Salary:</label><br/>
      <input type="number" onInput={this._handleInputSalary} className="grid-input"/>
      <br />

      <label >City:</label><br/>
      <input type="text" onInput={this._handleInputCity} className="grid-input"/>
      <br />

      <label>Closing Date:</label><br/>
      <input type="date" onInput={this._handleInputClose_date} className="grid-input"/>
      <br /><br/>

      <button type="submit" onClick={"/"}>Create Job!</button>

      </form>
      </div>

    );
  }
};

export default NewJob;
