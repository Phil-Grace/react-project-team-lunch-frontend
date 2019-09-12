import React, { Component } from "react"
import TeamSearch from "./TeamSearch"
import MemberForm from "./MemberForm"
import MemberList from "./MemberList"
import TeamUserAvatar from "./TeamUserAvatar"

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
        <TeamUserAvatar user={currentUser} />
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
