import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

export default class TeamSelection extends Component {
  render() {
    const { allUsers } = this.props;
    return (
      <div>
        {allUsers.map(user => {
          return (
            <Header as="h2">
              <Image
                circular
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />{" "}
              {user.username}
            </Header>
          );
        })}
      </div>
    );
  }
}
