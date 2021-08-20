import React, { Component } from 'react';
import CompanyHeaderSidebar from './CompanyHeaderSidebar';
import '../../App.css';

class SidebarLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.links = [
      {iconImg: "./assets/icons/dashboardIcon.png", text: "Dashboard", toggleImg:"./assets/icons/triangleIcon.png"},
      {iconImg: "./assets/icons/pagesIcon.png", text: "Pages", toggleImg:"./assets/icons/triangleIcon.png"},
      {iconImg: "./assets/icons/componentsIcon.png", text: "Components", toggleImg:"./assets/icons/triangleIcon.png"},
    ];
  }

  render() {

    const links = this.links.map((link) => 
      <div className="sidebarLink">
        <img src={link.iconImg} />
        <p>{link.text}</p>
        <img className="toggleIcon" src={link.toggleImg} />
      </div>
    )

    return (
      <div id="sidebarLinks">
        {links}
      </div>
    );
  }
}

export default SidebarLinks;