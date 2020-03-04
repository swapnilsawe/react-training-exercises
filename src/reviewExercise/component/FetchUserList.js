import React from "react";

export default class FetchUserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true
        }
    }
    componentDidMount() {
        console.log("FetchUserComponent Mounted");
        this.loadData();
    }

    async loadData() {
        const usersList = await this.doApiCalls();
        this.setState({
            users: usersList,
            isLoading: false
        });
    }

    doApiCalls() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                return resp.json();
            })
    }

    componentWillUnmount() {
        console.log("FetchUserComponent will be un Mounted");

    }
    render() {
        if (this.state.isLoading) {
            return <div>Loading..</div>;
        } else if (this.state.users.length > 0) {
            const copyOfUserList = this.state.users;
            const renderedList =
                copyOfUserList.map((user) => {
                    return (
                        <tbody key={user.id}><tr>
                            <td><button onClick= {(userid) => this.props.func(user.id)}>{user.name}</button></td>
                        </tr>
                        </tbody>);
                });

            return (
                <div>
                    <div className="sectionHeader">Users</div>
                <table>
                    {renderedList}
                </table>
                </div>
            );


        }
        return <div className="sectionHeader">Fetching Now</div>;
    }
}
