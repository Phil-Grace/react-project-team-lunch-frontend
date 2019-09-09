import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./profile/ProfileContainer";
import TeamContainer from "./team/TeamContainer";
import RouletteContainer from "./roulette/RouletteContainer";

// const fetchURL = "http://10.198.66.254:3000"; // Phil's
// const fetchURL = "http://10.198.66.254:3000"; // Grace's
const fetchURL = "http://localhost:3000"; // Host
const fetchUsers = fetchURL + "/users";
const fetchTeams = fetchURL + "/teams";
// const fetchUserTeams = fetchURL + "/user_teams";

class App extends Component {
  state = {
    allUsers: [],
    allTeams: [],
    currentUserId: 1 // update this to backend
  };

  componentDidMount() {
    this.fetchUsers();
    this.fetchTeams();
  }

  fetchUsers = () => {
    fetch(fetchUsers)
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }));
  };

  fetchTeams = () => {
    fetch(fetchTeams)
      .then(res => res.json())
      .then(teams => this.setState({ allTeams: teams }));
  };

  fetchYelp = () => {}
  
  render() {
    const { allUsers, allTeams, currentUserId} = this.state;
    const currentUser = allUsers.find(user => Number(user.id) === currentUserId)
    return (
      <div>
        {/* <ProfileContainer currentUser={currentUser}/> */}
        {/* <RouletteContainer /> */}
        <TeamContainer allUsers={allUsers} allTeams={allTeams} currentUser={currentUser} fetchURL={fetchURL}/>
      </div>
    );
  }
}

export default App;
