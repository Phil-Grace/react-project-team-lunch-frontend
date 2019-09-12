import React, { Component } from "react"
import "./App.css"
import TeamContainer from "./team/TeamContainer"
import RouletteContainer from "./roulette/RouletteContainer"
import LoginForm from "./login/LoginForm"
import NewUserForm from "./login/NewUserForm"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

const queryURL = "http://localhost:3000/search"
const fetchURL = "http://localhost:3000" // Host
const fetchUsers = fetchURL + "/users"
const fetchTeams = fetchURL + "/teams"
// const fetchUserTeams = fetchURL + "/user_teams"

class App extends Component {
  state = {
    allUsers: [],
    allTeams: [], // JSON please log in
    currentUserId: 0, // update this to backend
    currentUser: {},
    yelpResults: [],
    currentTeam: {},
    loggedIn: false,
    showTeamContainer: true
  }

  componentDidMount() {
    this.fetchCurrentUser()
    this.fetchUsers()
    this.fetchTeams()
    console.log('app')
  }

  fetchCurrentUser = () => {
    // this.fetchAuthToken(fetchUsers)
    fetch(fetchURL + "/finduser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ token: localStorage.token })
    })
      .then(res => res.json())
      // .then(console.log)
      // .then(data => this.setState({loggedIn: true, currentUserID: data.user_id}))
      .then(data => {
        if (data.user) {
          this.getUser(data.user)
        }
      })
      .catch(err => console.log(err))
  }

  fetchYelp = (location, term) => {
    const querySearch = queryURL
    fetch(querySearch, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        term: term,
        location: location
      })
    })
      .then(res => res.json())
      .then(data => this.setState({ yelpResults: data.results }))
      .catch(err => console.log(err))
  }

  fetchUsers = () => {
    this.fetchAuthToken(fetchUsers)
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }))
      .catch(err => console.log(err))
  }

  fetchTeams = () => {
    this.fetchAuthToken(fetchTeams)
      .then(res => res.json())
      .then(teams => this.setState({ allTeams: teams }))
      .catch(err => console.log(err))
  }

  fetchAuthToken = url => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
  }
  getCurrentTeam = newTeamObj => {
    this.setState({ currentTeam: newTeamObj })
  }
  logOut = () => {
    localStorage.clear()
    this.setState({ loggedIn: false })
    console.log("logged out")
  }
  selectContainer = e => {
    this.setState({ showTeamContainer: !this.state.showTeamContainer })
  }

  getUser = user => {
    this.setState({ currentUser: user, loggedIn: true })
  }

  render() {
    const {
      allUsers,
      allTeams,
      // currentUserId,
      currentTeam,
      currentUser,
      loggedIn,
      // showTeamContainer,
      yelpResults
    } = this.state
    // const currentUser = allUsers.length > 0 ? allUsers.find(user => user.id === currentUserId) : null;
    const tokenCheck = localStorage.token ? true : false
    console.log(tokenCheck, loggedIn)
    console.log(this.state)

    // return allUsers.length > 0 ? (
    return true ? (
      <div className="login-container">
        <Router>
          {loggedIn ? (
            <Link to="/login" onClick={this.logOut}>
              Log Out
            </Link>
          ) : null}
          <Route
            path="/login"
            render={() =>
              loggedIn ? (
                <Redirect to="/newteam" />
              ) : (
                <LoginForm
                  getUser={this.getUser}
                  fetchUsers={this.fetchUsers}
                  fetchTeams={this.fetchTeams}
                />
              )
            }
          />
          <Route
            path="/createaccount"
            render={() =>
              loggedIn ? (
                <Redirect to="/newteam" />
              ) : (
                <NewUserForm
                  getUser={this.getUser}
                  fetchUsers={this.fetchUsers}
                  fetchTeams={this.fetchTeams}
                />
              )
            }
          />
          <Route
            path="/newteam"
            render={() =>
              loggedIn ? (
                <TeamContainer
                  allUsers={allUsers}
                  allTeams={allTeams}
                  currentUser={currentUser}
                  fetchURL={fetchURL}
                  getCurrentTeam={this.getCurrentTeam}
                  currentTeam={currentTeam}
                  selectContainer={this.selectContainer}
                  fetchCurrentUser={this.fetchCurrentUser}
                  fetchUsers={this.fetchUsers}
                  fetchTeams={this.fetchTeams}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/roulette"
            render={() =>
              loggedIn ? (
                <RouletteContainer
                  fetchYelp={this.fetchYelp}
                  yelpResults={yelpResults}
                  selectContainer={this.selectContainer}
                  fetchCurrentUser={this.fetchCurrentUser}
                  fetchUsers={this.fetchUsers}
                  fetchTeams={this.fetchTeams}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Router>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default App
