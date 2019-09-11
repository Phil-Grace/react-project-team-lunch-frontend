import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const URL = "http://localhost:3000/" 

class NewUserForm extends Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  handleSubmit = () => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.usernameInput,
        password: this.state.passwordInput
      })
    })
      .then(res => res.json())
      // .then(console.log.results)
      .then(userdata => this.props.getUserId(userdata.results))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const targetValue = e.target.value;
    const targetName = e.target.name;
    this.setState({ [targetName]: targetValue });
  };

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
    );
  }
}

export default NewUserForm;
