import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class CompanyHeaderSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }


  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="companyHeaderSidebar">
        <img src={logo} className="profileImage" />
        <h2>company name</h2>
      </div>
    );
  }
}

export default CompanyHeaderSidebar;