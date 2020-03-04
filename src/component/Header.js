import React from "react";
import Notification from "./Notification"
import Timer from './Timer'

import "../stylesheets/headerStyle.css";
import ShowList from "./ShowList";
import FetchUsersList from "./FetchUsersList";

const isBlue = false;

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showNotification: true,
        showTimer: true
    }
    this.updateNotificationState= this.updateNotificationState.bind(this);
    this.updateTimerState= this.updateTimerState.bind(this);
}
  updateNotificationState() {
    alert("Button is clicked, state changed");
    this.setState({
        showNotification: !(this.state.showNotification)
    });
}

updateTimerState() {
    this.setState({
        showTimer: !(this.state.showTimer)
    });

}

  render() {
    return (
      <div className="Header">
        <div className="headerDiv">{this.props.headerName}</div>
        <div style={bodyDiv}>
          <p>This is the exercise telling how to use css in various ways</p>
        </div>
        <div className="NotificationArea">
        {this.state.showNotification && <Notification notificationType="alert"/>}  
         </div>
         <div className="NotificationArea">
         {this.state.showTimer && <Timer/>} 
         </div>

         <button style={buttonstyle} onClick={this.updateNotificationState}>
         Show Notification
        </button>
        <button style={buttonstyle} onClick={this.updateTimerState}>
         Show Timer
        </button>
        <div className="bodyContent">
        
        <FetchUsersList/>
        </div>
        <div
          style={{
            fontSize: "9px"
          }}
        >
          This is the footer on the page
        </div>
      </div>
    );
  }
}

const bodyDiv = {
  fontFamily: "sans-serif",
  fontSize: "12px"
};

const buttonstyle = {
  fontFamily: "sans-serif",
  color: isBlue ? "blue" : "black",
  fontSize: "12px"
};
 
