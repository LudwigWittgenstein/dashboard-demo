import React, { Component } from 'react';
import CompanyHeaderSidebar from './CompanyHeaderSidebar';
import '../../App.css';

class DashboardDisplayWidgets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstWidget: true,
    }

    this.firstWidgets = [
      {icon:"./assets/icons/paperIcon.png", iconColor:"orange", title: "Used Space", stats:"49/50", statsExtraData:"GB", notification:"Get more space", iconNotification: "./assets/icons/warningRedIcon.png", iconNotificationClass:"noFilter"},
      {icon:"./assets/icons/houseIcon.png", iconColor:"green", title: "Revenue", stats:"$34,245", statsExtraData:"", notification:"Last 24 Hours", iconNotification: "./assets/icons/calendarIcon.png", iconNotificationClass:""},
      {icon:"./assets/icons/iIcon.png", iconColor:"red", title: "Fixed Issues", stats:"75", statsExtraData:"", notification:"Tracked from Github", iconNotification: "./assets/icons/githubIcon.png", iconNotificationClass:""},
      {icon:"./assets/icons/twitterIcon.png", iconColor:"blue", title: "Followers", stats:"+245", statsExtraData:"", notification:"Just Updated", iconNotification: "./assets/icons/pastIcon.png", iconNotificationClass:""}
    ];


  }

  componentDidMount() {

  }

  render() {

    const firstWidgets = this.firstWidgets.map((widget)=>
      <div className="widgetFirst">
        <div className="widgetMainSection">
          <div className={"widgetIcon " + widget.iconColor}><img src={widget.icon} /></div>
          <div className="widgetInfo">
            <p>{widget.title}</p>
            <div className="widgetStats">
              <p>{widget.stats}</p>
              <p>{widget.statsExtraData}</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="widgetSubSection">
          <img src={widget.iconNotification} className={widget.iconNotificationClass} />
          <p>{widget.notification}</p>
        </div>
      </div>
    )

    return (
      <div id="dashboardDisplayWidgets">
        {this.state.firstWidget === true &&
          <div className="widgetBlock">
            {firstWidgets}
          </div>
        }
      </div>
    );
  }
}

export default DashboardDisplayWidgets;