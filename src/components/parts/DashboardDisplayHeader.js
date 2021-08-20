import React, { Component } from 'react';
import CompanyHeaderSidebar from './CompanyHeaderSidebar';
import '../../App.css';

class DashboardDisplayHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }


  }

  toggleSidebar() {
    if(window.screen.width > 700) {
      document.getElementById("sidebar").classList.toggle("toggleSidebar");
      document.getElementById("dashboardDisplay").classList.toggle("toggleDashboard");
    } else {
      document.getElementById("sidebar").classList.toggle("toggleSidebarMobile");
      document.getElementById("sidebarMobileToggle").classList.toggle("sidebarMobileToggleToggle");
    }
  }

  render() {

    return (
      <div id="dashboardDisplayHeader">
        <div className="dashboardDisplayHeaderLeft">
          <div className="elipsisMenu whiteCircle boxShadow" onClick={()=>this.toggleSidebar()}><span/><span/><span/></div>
          <p>Dashboard</p>
        </div>
        <div className="dashboardDisplayHeaderRight">
          <input placeholder="Search" />
          <img className="searchIcon whiteCircle boxShadow" src="./assets/icons/searchIcon.png" />
          <img src="./assets/icons/dashboardDarkIcon.png" className="icon" />
          <img src="./assets/icons/notificationIcon.png" className="icon" />
          <img src="./assets/icons/userIcon.png" className="icon" />
        </div>
      </div>
    );
  }
}

export default DashboardDisplayHeader;