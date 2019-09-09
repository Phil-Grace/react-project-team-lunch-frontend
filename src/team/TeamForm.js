// LUNCH? Button
import React, { Component } from "react";
import { Button, Form, Header, Image } from "semantic-ui-react";

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
    console.log(Object.keys(currentUser))
    return (
      <div>
        <Form onSubmit={(event) => addATeam(event, this.state)}>
          <Form.Field widths="equal">
            <label>Team Leader: {currentUser.username}</label>
            <label>Enter Team Name</label>
            <input onChange={this.handleChange} name="teamNameInput" placeholder="Enter a team name..." />
            <label>Enter Team Location</label>
            <input onChange={this.handleChange} name="locationInput" placeholder="Enter a location..." />
          </Form.Field>
          <Button type="submit">Create Team</Button>
        </Form>
      </div>
    );
  }
}
