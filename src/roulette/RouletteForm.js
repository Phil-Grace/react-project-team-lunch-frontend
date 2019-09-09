import React, { Component } from "react";
import { Dropdown, Button, Form } from "semantic-ui-react";

const categories = [
  {
    key: "sushi",
    text: "Sushi",
    value: "sushi"
  },
  {
    text: "American",
    value: "american"
  },
  {
    text: "Burgers",
    value: "burgers"
  },
  {
    text: "Italian",
    value: "italian"
  },
  {
    text: "Greek",
    value: "greek"
  },
  {
    text: "Chinese",
    value: "chinese"
  },
  {
    text: "Mexican",
    value: "mexican"
  },
  {
    text: "Asian",
    value: "asian"
  },
  {
    text: "Salads",
    value: "salads"
  }
];

const cityOptions = [
  { key: "chicago", value: "chicago", text: "Chicago" },
  { key: "new york", value: "new york", text: "New York" },
  { key: "detroit", value: "detroit", text: "Detroit" }
];

export default class RouletteForm extends Component {

  state = {
    locationInput: "",
    categoryInput: ""
  };

  handleDropdown = (e, data) => {
    const targetValue = data.value;
    const targetName = data.name;
    this.setState({ [targetName]: targetValue })
  };

  render() {
    const {updateState, handleDropdown, handleSpin} = this.props
    console.log(this.state)
    return (
      <div>
        <Form onSubmit={(e)=> handleSpin(e,this.state)}>
          <Form.Field>
            <Dropdown
              button
              floating
              search
              labeled
              onChange={this.handleDropdown}
              name="categoryInput"
              placeholder="Select Category"
              fluid
              selection
              options={categories}
            />

            <Dropdown
              button
              floating
              search
              labeled
              onChange={this.handleDropdown}
              name="locationInput"
              placeholder="Select From List"
              fluid
              selection
              options={cityOptions}
            />
          </Form.Field>
          <Form.Field control={Button} primary>SPIN DAT ISH</Form.Field>
      </Form>
    </div>
    );
  }
}
