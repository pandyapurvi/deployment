import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

// note: https://github.com/wojtekmaj/react-pdf
class Seeker extends Component {
  constructor(){
    super();
    this.state = {
      seeker_user:[]
    }
    // this.allSeeker = this.allSeeker.bind(this);

  const allSeeker = () => {
    axios.get('https://server-job-board.herokuapp.com/users.json').then((results) => {
      console.log(results.data);
      const seeker_data = results.data;
      const listSeekers = [];
      for (let i = 0; i < seeker_data.length; i++){
        const seekerData = seeker_data[i];
        console.log(seekerData);
        console.log("employer" + seekerData.employer)

         if (seekerData.employer === false){
           listSeekers.push(seekerData);
         }
      }
      this.setState({seeker_user: listSeekers});
      console.log(listSeekers);
    })
  };
  allSeeker();
  }
  render(){
    return (
      <div>
      <Nav />
        <h3>All Seeker Profile</h3>
        <ShowSeekerProfile seeker_user={this.state.seeker_user}/>
        <Footer/>
      </div>
    )
  }
};

const ShowSeekerProfile =  (props) => {
  const isEmployer = UserProfile.getEmployer();

    return(
      <div className="grid-container">
        {props.seeker_user.map((s) =>
              <div className="job-macro">
              <Link to={"/seeker/" + s.id} className="seeker" ><p>{s.name}</p></Link>
              <p >{s.current_title}</p>
              </div>

        )}
      </div>
    )
};
export default Seeker;
