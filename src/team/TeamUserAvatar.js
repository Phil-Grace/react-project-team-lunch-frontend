import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

export default class TeamUserAvatar extends Component {
  render() {
    const { user, addMember, removeMember } = this.props
    return (
      <div onClick={addMember ? (event) => addMember(event, user) : (event) => removeMember(event, user)}>
        <Header as="h2">
          <Image
            circular
            src="https://cdn3.iconfinder.com/data/icons/women-avatars/314/9-01-512.png"
          />{" "}
          {user.username}
        </Header>
      </div>
    );
  }
}
