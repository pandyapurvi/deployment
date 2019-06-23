import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

class JobDetail extends Component {
  constructor(props) {
    super(props);
      this.state = {
        job: []
      }
      const job_id = this.props.match.params.id;
      console.log("jobs" + job_id);
      const URL = 'https://server-job-board.herokuapp.com/jobs/'+ job_id +'.json'

      const fetchJob = () => {
        axios.get(URL).then((results) => {
          console.log("This Jobs: " + results.data)
          this.setState({job: results.data})
        });
      }
      fetchJob();
  }

  render() {
    const isEmployer = UserProfile.getEmployer();
    return (
      <div>
        <Nav />

        <Description job={this.state.job}/>
        <div className="grid-container">
        {
        isEmployer
        ?  <Link to={"/newjob"}><button className="button-update">Update</button></Link>
        : ''
      }
      </div>

        <Footer />
      </div>
    )
  }
};

class Description extends Component {
  render(){
    const isEmployer = UserProfile.getEmployer();
    const isEmail = UserProfile.getEmail();
    console.log("is Email" + isEmail);
    return (
      <div className="container">
      <div className="grid-container">
        <h3>{this.props.job.title}</h3>
        <p><strong>Posted On: </strong>{this.props.job.post_date}</p>
        <p className="describe"><strong>Description: </strong>{this.props.job.description}</p>
        <p><strong>Type of Company: </strong>{this.props.job.company_type}</p>
        <p><strong>Level: </strong>{this.props.job.level}</p>
        <p><strong>Type of Job: </strong>{this.props.job.job_type}</p>
        <p><strong>Salary: </strong>${this.props.job.salary}</p>
        <p><strong>City: </strong>{this.props.job.city}</p>
        <p><strong>Job Closing Date: </strong>{this.props.job.close_date}</p>
        {
          (isEmail === '')
          ? <Link to={"/login"}><button>Apply</button></Link>
          : isEmployer
          ? '': <Link to={"/job/" + this.props.job.id + "/apply" }><button className="button">Apply</button></Link>
        }


      </div>
      </div>
    )
  }
}

export default JobDetail;
