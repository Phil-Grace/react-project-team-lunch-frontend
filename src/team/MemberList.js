import React, { Component } from "react";
import TeamUserAvatar from "./TeamUserAvatar";

export default class MemberList extends Component {
  render() {
    const { members, removeMember } = this.props;
    const mappedMembers = members.map(member => (
      <TeamUserAvatar user={member} removeMember={removeMember} />
    ));
    return <div>{mappedMembers}</div>;
  }
}
