import React, { Component } from "react";
import TeamForm from "./TeamForm";
import TeamSearch from "./TeamSearch";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";
import _ from "lodash";

export default class TeamContainer extends Component {
  state = {
    team_name: "",
    location: "",
    searchInput: "",
    members: [],
    team_id: undefined
  };

  saveTeamMembers = () => {
    // TODO Take array of members and run POST requests to the user_teams url
    const fetchUserTeams = this.props.fetchURL + "/user_teams";
    console.log(this.state.members);
    this.state.members.forEach(member => {
      fetch(fetchUserTeams, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          user_id: member.id,
          team_id: this.state.team_id
        })
      })
        .then(res => res.json())
        .then(newMember => console.log(newMember))
        .catch(err => console.log(err));
    });
  };

  addATeam = (e, team) => {
    const fetchTeams = this.props.fetchURL + "/teams";
    const { allTeams } = this.props;
    this.setState({
      team_name: team.teamNameInput,
      location: team.locationInput
    });

    // console.log(allTeams.filter(oldTeam => oldTeam.includes(team.teamNameInput)))
    fetch(fetchTeams, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        team_name: team.teamNameInput
      })
    })
      .then(res => res.json())
      .then(team => this.setState({ team_id: team.id }))
      .catch(err => console.log(err));
  };

  addMember = (e, member) => {
    const memberCheck = this.state.members.includes(member);
    if (!memberCheck) {
      this.setState({ members: [...this.state.members, member] });
    }
  };

  removeMember = (e, member) => {
    const newMemberArray = [];
    this.state.members.forEach(user => {
      if (user !== member) {
        newMemberArray.push(user);
      }
    });
    this.setState({ members: newMemberArray });
  };

  handleChange = (e, value) => {
    this.setState({ searchInput: value });
  };

  render() {
    const { allUsers, currentUser } = this.props;
    const { searchInput, members, team_name, location } = this.state;
    const filteredUsers = searchInput
      ? allUsers.filter(user => user.username.includes(searchInput))
      : null;
    console.log(this.state);
    return (
      <div>
        <TeamForm currentUser={currentUser} addATeam={this.addATeam} />
        <MemberList 
            members={members} 
            removeMember={this.removeMember} 
            team_name={team_name}  
            location={location}      
        />
        <MemberForm
            handleChange={this.handleChange}
            saveTeamMembers={this.saveTeamMembers}
        />
        <TeamSearch addMember={this.addMember} filteredUsers={filteredUsers} />
      </div>
    );
  }
}
