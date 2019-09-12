import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import TeamUserAvatar from "./TeamUserAvatar";

export default class MemberList extends Component {
  render() {
    const { members, removeMember,team_name, location, currentUser } = this.props;
    console.log(members)
    const filterUsers = members.filter(member => member.id !== currentUser.id)
    const mappedMembers = filterUsers.map(member => (
      <TeamUserAvatar user={member} removeMember={removeMember} />
    ));
    return (
      <div style={{textAlign: 'left', margin: '0 15px'}} className="member-list">
        {/* <Header>Team Name: {team_name}</Header> */}
        <Header as='h2'>My Team</Header>
        <div style={{backgroundColor: '#F9Cf00', margin: '10px'}}>{mappedMembers} </div>
      </div>
    )
  }
}
