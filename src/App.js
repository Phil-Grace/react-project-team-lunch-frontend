import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./profile/ProfileContainer";
import TeamContainer from "./team/TeamContainer";
import RouletteContainer from "./roulette/RouletteContainer";
import LoginContainer from "./login/LoginContainer";
import LoginForm from "./login/LoginForm";
import { Search } from "semantic-ui-react";
import NewUserForm from "./login/NewUserForm";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const queryURL = "http://localhost:3000/search";
const fetchURL = "http://localhost:3000"; // Host
const fetchUsers = fetchURL + "/users";
const fetchTeams = fetchURL + "/teams";
const fetchUserTeams = fetchURL + "/user_teams";

class App extends Component {
  state = {
    allUsers: [],
    allTeams: [], // JSON please log in
    currentUserId: 9, // update this to backend
    currentUser: {},
    yelpResults: [],
    currentTeam: {},
    showTeamContainer: true
  };

  componentDidMount() {
    this.fetchCurrentUser()
    // this.fetchUsers();
    // this.fetchTeams();
  }

  fetchCurrentUser = () => {
    fetch(fetchUsers, {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json())
    .catch(err => console.log(err))
  }

  fetchYelp = (location, term) => {
    const querySearch = queryURL;
    fetch(querySearch, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        term: term,
        location: location
      })
    })
      .then(res => res.json())
      .then(data => this.setState({ yelpResults: data.results }))
      .catch(err => console.log(err));
  };

  fetchUsers = () => {
    fetch(fetchUsers, {
      method: 'GET', 
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }))
      .catch(err => console.log(err))
  };

  fetchTeams = () => {
    fetch(fetchTeams, {
      method: 'GET', 
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(teams => this.setState({ allTeams: teams }))
      .catch(err => console.log(err))
  };

  getCurrentTeam = newTeamObj => {
    this.setState({ currentTeam: newTeamObj });
  };

  selectContainer = e => {
    this.setState({ showTeamContainer: !this.state.showTeamContainer });
  };

  // set state of current user ID after the login is successful
  getUser = user => {
    this.setState({ currentUser: user });
  };

  render() {
    const {
      allUsers,
      allTeams,
      // currentUserId,
      currentTeam,
      currentUser,
      showTeamContainer,
      yelpResults
    } = this.state;
    // const currentUser = allUsers.length > 0 ? allUsers.find(user => user.id === currentUserId) : null;
    
    console.log(this.state);

    // return allUsers.length > 0 ? (
    return true ? (
      <div className="login-container">

        <Route
          path="/login"
          render={() => <LoginForm getUser={this.getUser} fetchUsers={this.fetchUsers} fetchTeams={this.fetchTeams} />}
        />
        <Route 
          path='/createaccount'
          render={NewUserForm}
        />
        <Route
          path="/newteam"
          render={() => (
            <TeamContainer
              allUsers={allUsers}
              allTeams={allTeams}
              currentUser={currentUser}
              fetchURL={fetchURL}
              getCurrentTeam={this.getCurrentTeam}
              currentTeam={currentTeam}
              selectContainer={this.selectContainer}
            />
          )}
        />
        <Route
          path="/roulette"
          render={() => (
            <RouletteContainer
              fetchYelp={this.fetchYelp}
              yelpResults={yelpResults}
              selectContainer={this.selectContainer}
            />
          )}
        />
      </Router>
      </div>
    ) : (<div>Loading...</div>)
  }
}

export default App;
