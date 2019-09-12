// LUNCH? Button
import React, { Component } from "react";
import { Button, Form, Header, Image, Message } from "semantic-ui-react";
import TeamUserAvatar from "./TeamUserAvatar";

const styleTeamName = {
  // color: 'white',
  textAlign: 'center',
  padding: '10px 10px',
  fontFamily: 'Arvo'
}

const styleForm = {
  // color: 'white',
  textAlign: 'center',
  padding: '10px 10px'
}

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
      <div style={styleForm}>
        <Form error onSubmit={(event) => addATeam(event, this.state)}>
          <Form.Field style={styleForm} widths="equal">
            {/* <label>Team Leader: {currentUser.username}</label> */}
            {/* <TeamUserAvatar user={currentUser} /> */}
            <Header style={styleTeamName} as='h1'>Enter Team Name</Header>
            <Form.Input onChange={this.handleChange} name="teamNameInput" placeholder="Enter a team name..." />
            {/* <Message negative error header="error"/> */}
          </Form.Field>
          <Button type="submit" style={{backgroundColor: '#F9CF00', color: 'black'}}>Create Team</Button>
        </Form>
      </div>
    );
  }
}
