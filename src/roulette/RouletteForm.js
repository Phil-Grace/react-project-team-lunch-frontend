import React, { Component } from "react";
import { Dropdown, Button, Form } from "semantic-ui-react";
import categoryData from "../categoryData";
import cityData from "../cityData";

export default class RouletteForm extends Component {
  state = {
    locationInput: "",
    categoryInput: ""
  };

  handleDropdown = (e, data) => {
    const targetValue = data.value;
    const targetName = data.name;
    this.setState({ [targetName]: targetValue });
  };

  render() {
    const { updateState, handleDropdown, handleSpin } = this.props;
    // console.log(this.state)
    return (
      <div>
        <Form onSubmit={e => handleSpin(e, this.state)}>
          <Form.Group textAlign='center' color="teal" widths="equal">
            <Form.Field>
              <Dropdown.Header  as="h1" inverted>
                Select Category
              </Dropdown.Header>
              <Dropdown
                floating
                search
                labeled
                onChange={this.handleDropdown}
                name="categoryInput"
                placeholder="Select Category"
                fluid
                selection
                options={categoryData}
              />
              <Dropdown.Header as="h1" inverted>
                Select City
              </Dropdown.Header>
              <Dropdown
                floating
                search
                labeled
                onChange={this.handleDropdown}
                name="locationInput"
                placeholder="Select City"
                fluid
                selection
                options={cityData}
              />
            </Form.Field>
            <Form.Field control={Button} primary>
              SPIN DAT ISH
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
