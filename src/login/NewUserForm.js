import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class NewUserForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="username"
              placeholder="Enter username"
              error
            />
            <Form.Input fluid label="password" placeholder="Enter password" />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default NewUserForm;
