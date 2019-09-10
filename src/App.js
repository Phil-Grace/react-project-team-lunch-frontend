import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./profile/ProfileContainer";
import TeamContainer from "./team/TeamContainer";
import RouletteContainer from "./roulette/RouletteContainer";
import LoginContainer from "./login/LoginContainer";
import { Search } from "semantic-ui-react";

const queryURL = "http://localhost:3000/search";
const fetchURL = "http://localhost:3000" // Host
const fetchUsers = fetchURL + "/users"
const fetchTeams = fetchURL + "/teams"
const fetchUserTeams = fetchURL + "/user_teams";

class App extends Component {
  state = {
    allUsers: [],
    allTeams: [],
    currentUserId: 1, // update this to backend
    yelpResults: [],
    currentTeam: {},
    showTeamContainer: true
  };

componentDidMount() {
    this.fetchUsers();
    this.fetchTeams();
  }

  fetchYelp = (location, term) => {
    const querySearch = queryURL
    fetch(querySearch, {
      method: "POST",
      headers: {"content-type": "application/json", "accept": "application/json"},
      body: JSON.stringify({
        term: term,
        location: location
      })
    })
    .then(res => res.json())
    .then(data => this.setState({yelpResults: data.results}))
    .catch(err => console.log(err))
  }
  
  fetchUsers = () => {
    fetch(fetchUsers)
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }))
  }

  fetchTeams = () => {
    fetch(fetchTeams)
      .then(res => res.json())
      .then(teams => this.setState({ allTeams: teams }))
  }

  getCurrentTeam = newTeamObj => {
    this.setState({ currentTeam: newTeamObj })
  }

  selectContainer = e => {
    this.setState({showTeamContainer: !this.state.showTeamContainer})
  }

  render() {
    const {
      allUsers,
      allTeams,
      currentUserId,
      currentTeam,
      showTeamContainer,
      yelpResults
    } = this.state
    const currentUser = allUsers.find(user => user.id === currentUserId)
    // console.log(yelpResults)
    return allUsers.length > 0 ? (
      <div>
        {/* <ProfileContainer currentUser={currentUser}/> */}
        {showTeamContainer ? (
          <TeamContainer
            allUsers={allUsers}
            allTeams={allTeams}
            currentUser={currentUser}
            fetchURL={fetchURL}
            getCurrentTeam={this.getCurrentTeam}
            currentTeam={currentTeam}
            selectContainer={this.selectContainer}
          />
        ) : (
          <RouletteContainer 
            fetchYelp={this.fetchYelp} 
            yelpResults={yelpResults}
            selectContainer={this.selectContainer}
          />
        )}
      </div>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default App
