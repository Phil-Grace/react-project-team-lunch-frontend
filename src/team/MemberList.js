import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import TeamUserAvatar from "./TeamUserAvatar";

export default class MemberList extends Component {
  render() {
    const { members, removeMember,team_name, location } = this.props;
    const mappedMembers = members.map(member => (
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
