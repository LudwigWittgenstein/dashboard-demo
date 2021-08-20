import React, { Component } from 'react';
import CompanyHeaderSidebar from './CompanyHeaderSidebar';
import logo from '../../logo.svg';
import '../../App.css';

class ProfileSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }


  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="profileSidebar">
        <img src="./assets/icons/user.png" className="profileImage" />
        <p>User Name</p>
      </div>
    );
  }
}

export default ProfileSidebar;