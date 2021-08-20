import React, { Component } from 'react';
import CompanyHeaderSidebar from './CompanyHeaderSidebar';
import ProfileSidebar from './ProfileSidebar';
import SidebarLinks from './SidebarLinks';
import '../../App.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  toggleSidebarMobile(){
    document.getElementById("sidebar").classList.toggle("toggleSidebarMobile");
    document.getElementById("sidebarMobileToggle").classList.toggle("sidebarMobileToggleToggle");
  }

  render() {

    return (
      <div id="sidebar">
        <h1 className="sidebarMobileToggle" id="sidebarMobileToggle" onClick={()=>this.toggleSidebarMobile()}>X</h1>
        <CompanyHeaderSidebar />
        <hr/>
        <ProfileSidebar />
        <hr/>
        <SidebarLinks />
      </div>
    );
  }
}

export default Sidebar;