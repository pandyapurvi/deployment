import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
// import UserProfile from './UserProfile';

class EmployerDetail extends Component {
  constructor(props){
    super(props);
      this.state = {
        employer: [],
        applications: [],
        jobList: []
      }
      const listApplications = [];
      const listJobs = [];
      const user_id = this.props.match.params.id;

      const URL = 'https://server-job-board.herokuapp.com/users/'+ user_id +'.json'

      const fetchEmployer = () => {
        axios.get(URL).then((results) => {

          this.setState({employer: results.data})
        });
      }
      fetchEmployer();


      const allApplications = () => {
        // const listApplications = [];
        // const listJobs = [];
        axios.get('https://server-job-board.herokuapp.com/jobs.json').then((results) => {


          const application_data = results.data;
            console.log("reaching here " + application_data[0].user_id);
            for (let i = 0; i < application_data.length; i++) {
              const applicationData = application_data[i];

                if (applicationData.user_id == user_id){

                  listApplications.push( applicationData );//selected title  and selected city
                }

            }
            this.setState({applications: listApplications});
        })

      }
      const allJobs = () => {
      axios.get('https://server-job-board.herokuapp.com/jobs.json').then((results) => {

        const listJobs_data = results.data;

          for (let i = 0; i < listJobs_data.length; i++) {
            const listJobsData = listJobs_data[i];

            for ( let j = 0; j < listApplications.length; j++){
              if (listJobsData.id === listApplications[j].job_id){

                listJobs.push( listJobsData );
              }

            }
          }
          this.setState({jobList: listJobs});

      })
    }
      allApplications();
      allJobs();
  }
  render() {
    return (
      <div>
      <Nav />
        <h3>Employer profile</h3>

        <Detail employer={this.state.employer} />
        <AppliList jobList={this.state.jobList} applications={this.state.applications}/>
        {console.log("application detail:" + this.state.applications)}
        <Footer />
      </div>
    )
  }
};

const Detail = (props) => {
  return (
    <div className="grid-container">

      <h4>Name of Company:{props.employer.name}</h4>
      <img src={props.employer.image} width="200" height="200"/>
          <p><strong>Email address:</strong>{props.employer.email}</p>
          <p><strong>Contact number:</strong>{props.employer.phone}</p>
          <p><strong>Social Website:</strong>{props.employer.website}</p>
          <p><strong>Size of Company:</strong>{props.employer.company_size}</p>
          <p><strong>Type of Company:</strong>{props.employer.company_type}</p>
          <p className="describe"><strong>Description:</strong>{props.employer.description}</p>
          <p><strong>ABN:</strong>{props.employer.ABN}</p>
          <Link to={"/seeker"} className="employer-btn">See Seeker's Profile</Link>



    </div>
  )
}

const AppliList = (props) => {

    if (props.applications.length === 0){
      return 'You havnt Post any Job.'
    } else {
      //TODO: sort by date
      return (
        <div>
        {props.applications.map((app)=>
          <div>
          <h4>Job Title:{app.title}</h4>

          </div>
        )}
        </div>
      )

    }

}

export default EmployerDetail;
