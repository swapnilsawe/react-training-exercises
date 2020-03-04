import React from "react";


export default class MonitorPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsDisplayed: false,
            continueLoadingPosts: true
        }
      }
   componentDidMount(){
       console.log("Monitor Posts Component Mounted");
   } 
   componentWillUnmount(){
    console.log("Monitor Posts Component will be un Mounted");

   }
  render() {
   return (<div>
       <div className="sectionHeader">Action</div>
       <div><button  onClick= {(buttonid) => this.props.func(1)}>Show Posts</button></div>
       <div><button  onClick= {(buttonid) => this.props.func(2)}>Start/Stop Posts</button></div>
       <div><button  onClick= {(buttonid) => this.props.func(3)}>Hide Posts</button></div>

  </div>);
  }
}
