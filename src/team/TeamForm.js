// LUNCH? Button
import React, { Component } from "react";
import { Button, Form, Header, Image } from "semantic-ui-react";
import TeamUserAvatar from "./TeamUserAvatar";

export default class TeamForm extends Component {
  state = {
    teamNameInput: '',
    locationInput: ''
  }

  handleChange = e => {
    const targetValue = e.target.value
    const targetName = e.target.name
    this.setState({[targetName]: targetValue})
  }

  render() {
    const { currentUser, addATeam } = this.props
    const { teamNameInput,locationInput } = this.state
    const { username } = currentUser
    // console.log(username)
    return (
      <div>
        <Form onSubmit={(event) => addATeam(event, this.state)}>
          <Form.Field widths="equal">
            {/* <label>Team Leader: {currentUser.username}</label> */}
            <TeamUserAvatar user={currentUser} />
            <label>Enter Team Name</label>
            <input onChange={this.handleChange} name="teamNameInput" placeholder="Enter a team name..." />
          </Form.Field>
          <Button type="submit">Create Team</Button>
        </Form>
      </div>
    );
  }
}
