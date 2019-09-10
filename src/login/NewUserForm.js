import React, { Component } from "react"
import { Form } from "semantic-ui-react"
const loginURL = "http://localhost:3000/login"

class NewUserForm extends Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleChange}
              fluid
              label="username"
              placeholder="Enter username"
              error
              name="usernameInput"
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              label="password"
              placeholder="Enter password"
              name="passwordInput"
              error
            />
            <Form.Button content="Submit" type="submit" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default NewUserForm
