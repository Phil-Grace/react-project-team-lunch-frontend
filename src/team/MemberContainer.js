import React, { Component } from "react"
import TeamSearch from "./TeamSearch"
import MemberForm from "./MemberForm"
import MemberList from "./MemberList"
import TeamUserAvatar from "./TeamUserAvatar"
import { Header } from "semantic-ui-react";

const style = {
  // color: 'white',
  textAlign: 'center',
  padding: '10px 10px',
  color: 'black',
  fontFamily: "Arvo"
}

export default class MemberContainer extends Component {
  render() {
    const {
      currentUser,
      members,
      removeMember,
      team_name,
      location,
      handleChange,
      saveTeamMembers,
      addMember,
      filteredUsers
    } = this.props
    // const {} = this.state
    return (
      <div className="member-container">
        {/* <label>Team Leader: {currentUser.username}</label> */}
        {/* <TeamUserAvatar user={currentUser} /> */}
        {/* <h1 style={style}>Find Team Members</h1> */}
        <Header style={style} as='h1'>Find Team Members</Header>
        <MemberList
          currentUser={currentUser}
          members={members}
          removeMember={removeMember}
          team_name={team_name}
          location={location}
        />
        <MemberForm
          handleChange={handleChange}
          saveTeamMembers={saveTeamMembers}
        />
        <TeamSearch addMember={addMember} filteredUsers={filteredUsers} />
      </div>
    )
  }
}
