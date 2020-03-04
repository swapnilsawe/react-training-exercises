import React from "react";

export default class FetchUsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true
        }
    }
    componentDidMount() {
        console.log("Component Mounted");
        this.loadData();
    }

    async loadData() {
        const usersList = await this.doApiCalls();
        console.log("usersList")
        console.log(usersList)
        this.setState({
            users: usersList,
            isLoading: false
        });
    }

    doApiCalls() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                console.log(resp);
                return resp.json();
            })
    }

    componentWillUnmount() {
        console.log("Component will be un Mounted");
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
                            <td>{user.name} &nbsp;</td>
                            <td>{user.username}&nbsp;</td>
                            <td>{user.phone}&nbsp;</td>
                            <td>{user.website}&nbsp;</td>
                        </tr>
                        </tbody>);
                });

            return (
                <table>{renderedList}</table>
            );


        }
        return <div className="sectionHeader">Fetching Now</div>;
    }
}
