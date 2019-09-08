// LUNCH? Button
import React, { Component } from "react";
import { Button, Form, Header, Image } from "semantic-ui-react";

export default class NewTeamForm extends Component {
  render() {
    return (
      <div>
          
        <Form>
          <Form.Field widths="equal">
            <label>Team Name</label>
            <input placeholder="Enter a team name..." />
          </Form.Field>
          <Button type="submit">Create Team</Button>
        </Form>
        <input type="text" name="search" placeholder="Search for a person here..."/>
      </div>
    );
  }
}
