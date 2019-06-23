import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
// import UserProfile from './UserProfile';

class SeekerDetail extends Component {
  constructor(props){
    super(props);
      this.state = {
        seeker: [],
        applications: [],
        jobList: []
      }
      const listApplications = [];
      const listJobs = [];
      const user_id = this.props.match.params.id;

      const URL = 'https://server-job-board.herokuapp.com/users/'+ user_id +'.json'

      const fetchSeeker = () => {
        axios.get(URL).then((results) => {

          this.setState({seeker: results.data})
        });
      }
      fetchSeeker();


      const allApplications = () => {
        // const listApplications = [];
        // const listJobs = [];
        axios.get('https://server-job-board.herokuapp.com/applications.json').then((results) => {


          const application_data = results.data;
            console.log("reaching here " + application_data[0].user_id);
            for (let i = 0; i < application_data.length; i++) {
              const applicationData = application_data[i];

                if (applicationData.user_id === user_id){

                  listApplications.push( applicationData );//selected title  and selected city
                }

            }
            this.setState({applications: listApplications});
        })
        // axios.get('https://server-job-board.herokuapp.com/jobs.json').then((results) => {
        //
        //   const listJobs_data = results.data;
        //     console.log("Ahiya Aave K e nai" + listJobs_data.length);
        //     for (let i = 0; i < listJobs_data.length; i++) {
        //       const listJobsData = listJobs_data[i];
        //       for ( let j = 0; j < listApplications.length; j++){
        //         if (listJobsData.id === listApplications[j].job_id){
        //           console.log("Have Ahinu Su chhe");
        //           listJobs.push( listJobsData );
        //         }
        //
        //       }
        //
        //
        //     }
        //     this.setState({jobList: listJobs});
        //
        // })


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
        <h3>Seeker profile</h3>

        <Detail seeker={this.state.seeker} />
        <AppliList jobList={this.state.jobList} applications={this.state.applications}/>
        {console.log("return ma listJobs" + this.state.jobList)}
        <Footer />
      </div>
    )
  }
};

const Detail = (props) => {
  return (
    <div className="grid-container">

      <h4>Name of Candidate:{props.seeker.name}</h4>
          <p><strong>Email address:</strong>{props.seeker.email}</p>
          <p><strong>Contact number:</strong>{props.seeker.phone}</p>
          <p><strong>Social Website:</strong>{props.seeker.website}</p>
          <p><strong>Current title:</strong>{props.seeker.current_title}</p>
          <p><strong>Require Notice Period:</strong>{props.seeker.notice_period}</p>
          <p><strong>Total years of an experience:</strong>{props.seeker.experience}</p>


    </div>
  )
}

const AppliList = (props) => {

    if (props.jobList.length === 0){
      return 'You havnt Applied for any Job.'
    } else {
      //TODO: sort by date
      return (

        <div >
        <h3>Applied Jobs by Seeker</h3>
        {props.jobList.map((job)=>
          <div className="applied-job">
          <h4 >Job Title:{job.title}</h4>

          </div>
        )}
        </div>
      )

    }


}

export default SeekerDetail;
