import React, { Component } from 'react';
import DashboardDisplay from './parts/DashboardDisplay';
import Sidebar from './parts/Sidebar';
import '../App.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div id="dashboard">
        <Sidebar />
        <DashboardDisplay />
      </div>
    );
  }
}

export default Dashboard;