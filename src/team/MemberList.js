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
      <div className="member-list">
        <Header>{team_name}</Header>
        <Header>{location}</Header>
        {mappedMembers}
      </div>
    )
  }
}
