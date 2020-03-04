import React from "react";

import "../../stylesheets/containerStyle.css";
import FetchUserList from "./FetchUserList";
import MonitorPosts from "./MonitorPosts";
import ShowPostContent from "./ShowPostContent";
export class ReviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: 0,
            leftCol: false,
            rightCol: false,
            showPosts: false,
            keepPulling: false,
            isLoading: true
        }
        this.userClicked = this.userClicked.bind(this)
        this.updatePostContent = this.updatePostContent.bind(this)
    }

    userClicked(user) {
        console.log("User was clicked upon"+user);
        this.setState({
            selectedUser: user,
            keepPulling: false, 
            showPosts: false,
            rightCol: true
        });
    }

    updatePostContent(buttonid) {
        console.log("This Button was clicked: "+buttonid);
        if(buttonid===2) {
            this.setState({
                keepPulling: !this.state.keepPulling, 
                showPosts: true
            });
    
        } else if (buttonid===3) {
            this.setState({
                keepPulling: false,
                showPosts: false
            });
        }else {
        this.setState({
            keepPulling: true, 
            showPosts: true
        });
    }
    }

    componentDidMount() {
        this.setState({
            selectedUser: 0,
            monitorPosts: false,
            leftCol: this.props.leftColVisible
        })
        console.log("Container Component Mounted");
    }

    componentWillUnmount() {
        console.log("Container Component will be un Mounted");
    }
    render() {
    return(
        <div>
    <div className="App-left-content">
          {this.state.leftCol && <FetchUserList func={this.userClicked}/>}
        </div>
        <div className="App-center-content">
          {this.state.showPosts && <ShowPostContent userid={this.state.selectedUser} startFetch={this.state.keepPulling}/>}
        </div>
        <div className="App-right-content">
        {this.state.rightCol && <MonitorPosts func={this.updatePostContent}/>} 
        </div>
        </div>
    );
    }
}
