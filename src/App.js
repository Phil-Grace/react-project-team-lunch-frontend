import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./containers/ProfileContainer";
import TeamContainer from "./containers/TeamContainer";
import RouletteContainer from "./containers/RouletteContainer";

const fetchURL = "http://10.198.66.254:3000";
const fetchUsers = fetchURL + "/users";

class App extends Component {
  state = {
    allUsers: [],
    currentUserId: 1 // update this to backend
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch(fetchUsers)
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }));
  };

  fetchYelp = () => {

  }
  
  render() {
    const { allUsers, currentUserId} = this.state;
    const currentUser = this.state.allUsers.find(user => user.id === currentUserId)
    console.log(currentUser)

    console.log(this.state);
    return (
      <div>
        <ProfileContainer currentUser={currentUser}/>
        <RouletteContainer />
        <TeamContainer allUsers={this.state.allUsers}/>
      </div>
    );
  }
}

export default App;
