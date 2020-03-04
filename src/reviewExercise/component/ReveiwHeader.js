import React from "react";
import ReviewTimer from './ReviewTimer'

import "../../stylesheets/headerStyle.css";

export class ReviewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showTimer: true
    }
    this.updateTimerState= this.updateTimerState.bind(this);
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
        <div className=".width60pc">
         {this.state.showTimer && <ReviewTimer/>} 
         </div>
        <div className=".width20pc">
        <button style={buttonstyle} onClick={this.updateTimerState}>
         Toggle Timer
        </button>
        </div>
      </div>
    );
  }
}

const buttonstyle = {
  fontFamily: "sans-serif",
  color:  "black",
  fontSize: "12px"
};
 
