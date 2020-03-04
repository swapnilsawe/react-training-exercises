import React from "react";

let timer
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocalTime: new Date().toLocaleTimeString()
        }
      }
   componentDidMount(){
       console.log("Component Mounted");
        timer = setInterval(() => {
            this.setState({
                currentLocalTime: new Date().toLocaleTimeString()
            })

        }, 1000);
   } 
   componentWillUnmount(){
    console.log("Component will be un Mounted");
    clearInterval(timer);

   }
  render() {
   return (<div>
    <p style={{ display: "inline" }}  >
     Current time is {this.state.currentLocalTime}
     </p>
  </div>);
  }
}
