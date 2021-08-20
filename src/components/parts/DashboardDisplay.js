import React, { Component } from 'react';
import DashboardDisplayHeader from './DashboardDisplayHeader';
import DashboardDisplayWidgets from './DashboardDisplayWidgets';
import '../../App.css';

class DashboardDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {

    return (
      <div id="dashboardDisplay">
        <DashboardDisplayHeader />
        <DashboardDisplayWidgets />
      </div>
    );
  }
}

export default DashboardDisplay;