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
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          {user.username}
        </Header>
      </div>
    );
  }
}
