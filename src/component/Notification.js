import React from "react";
import "../stylesheets/notification.css";


export default function Notification(prop) {
  return (<div className="Notification" id="notificationDiv">
    <p style={{ display: "inline" }} className={prop.notificationType} >
     This is {prop.notificationType} Notification
     &nbsp;&nbsp;&nbsp;&nbsp; 
     <button onClick={() => {console.log("Closed")}} >Close</button>
     </p>
  </div>);
}
