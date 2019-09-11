import React, { Component } from "react"
import TeamForm from "./TeamForm"
import MemberContainer from "./MemberContainer"

export default class TeamContainer extends Component {
  state = {
    team_name: "",
    location: "",
    searchInput: "",
    members: [],
    showTeamForm: true
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
    this.props.fetchUsers();
    this.props.fetchTeams();
  }


  saveTeamMembers = () => {
    // TODO Take array of members and run POST requests to the user_teams url
    const fetchUserTeams = this.props.fetchURL + "/user_teams"
    // console.log(this.state.members)
    this.state.members.forEach(member => {
      fetch(fetchUserTeams, {
        method: "POST",
        headers: { "content-type": "application/json", Authorization: `Bearer ${localStorage.token}` },
        body: JSON.stringify({
          user_id: member.id,
          team_id: this.props.currentTeam.id
        })
      })
        .then(res => res.json())
        .then(newMember => console.log(newMember))
        .catch(err => console.log(err))
    })
    this.setState({showTeamForm: !this.state.showTeamForm})
    this.props.selectContainer()
  }

  addATeam = (e, team) => {
    const fetchTeams = this.props.fetchURL + "/teams"
    const { allTeams } = this.props
    this.setState({
      team_name: team.teamNameInput,
      location: team.locationInput,
      showTeamForm: !this.state.showTeamForm
    })
    fetch(fetchTeams, {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${localStorage.token}` },
      body: JSON.stringify({
        team_name: team.teamNameInput
      })
    })
      .then(res => res.json())
      //   .then(team => this.setState({ team_id: team.id }))
      .then(team => this.props.getCurrentTeam(team))
      .catch(err => console.log(err))
  }

  addMember = (e, member) => {
    const memberCheck = this.state.members.includes(member)
    if (!memberCheck) {
      this.setState({ members: [...this.state.members, member] })
    }
  }

  removeMember = (e, member) => {
    const newMemberArray = []
    this.state.members.forEach(user => {
      if (user !== member) {
        newMemberArray.push(user)
      }
    })
    this.setState({ members: newMemberArray })
  }

  handleChange = (e, value) => {
    this.setState({ searchInput: value })
  }

  render() {
    const { allUsers, currentUser } = this.props
    const {
      searchInput,
      members,
      team_name,
      location,
      showTeamForm
    } = this.state
    const filteredUsers = searchInput
      ? allUsers.filter(user => user.username.includes(searchInput))
      : null
    // console.log(currentUser);
    return (
      <div className="team-form-container">
        {showTeamForm ? (
          <TeamForm currentUser={currentUser} addATeam={this.addATeam} />
        ) : (
          <MemberContainer
            currentUser={currentUser}
            members={members}
            removeMember={this.removeMember}
            team_name={team_name}
            location={location}
            handleChange={this.handleChange}
            saveTeamMembers={this.saveTeamMembers}
            addMember={this.addMember}
            filteredUsers={filteredUsers}
          />
        )}
      </div>
    )
  }
}
