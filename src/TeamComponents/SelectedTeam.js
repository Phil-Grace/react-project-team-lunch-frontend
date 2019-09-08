import React, { Component } from "react";

export default class SelectedTeam extends Component {
  render() {
    return (
      <div>
        <Header as="h2">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          Patrick
        </Header>
      </div>
    );
  }
}
