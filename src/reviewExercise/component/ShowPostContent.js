import React from "react";

let timer
export default class ShowPostContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postsToShow: [],
            count: 0,
            postsDisplayed: false,
            continueLoadingPosts: true
        }
    }
    componentDidMount() {
        console.log("ShowPostContent Component Mounted for userId" + this.props.userid);
        this.retrievePosts();
        timer = setInterval(() => {
            if (this.props.startFetch) {
                this.setState({
                    postsToShow: this.state.posts.slice(0, this.state.count),
                    count: this.state.count + 1
                })
                if (this.state.count === this.state.posts.length) {
                    console.log("cancelling timer");
                    clearInterval(timer);
                }
            }

        }, 2000);
    }
    componentWillUnmount() {
        console.log("ShowPostContent Component will be un Mounted");
        clearInterval(timer);

    }

    async retrievePosts() {
        const postsList = await this.doApiCalls();
        this.setState({
            posts: postsList,
            isLoading: false
        });
    }
    doApiCalls() {
        const endpointToInvoke = "https://jsonplaceholder.typicode.com/posts?userId=" + this.props.userid;
        return fetch(endpointToInvoke)
            .then((resp) => {
                return resp.json();
            })
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading..</div>;
        } else if (this.state.posts.length > 0) {
            const copyOfPosts = this.state.postsToShow;
            const renderedPost =
                copyOfPosts.map((post) => {
                    return (
                        <div key={post.id} className="postDesign">
                <p><u>{post.userId}:{post.id}</u></p>
                            <p><b>{post.title}</b></p>
                            <p>{post.body}</p>
                        </div>
                        );
                });

            return (
                <div>
                <div className="sectionHeader">Posts</div>
                    {renderedPost}
                </div>
            );


        }
        return <div className="sectionHeader">Now Fetching</div>;
    }
}
