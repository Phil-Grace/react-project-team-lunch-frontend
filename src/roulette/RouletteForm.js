import React, { Component } from "react"
import { Dropdown, Button, Form } from "semantic-ui-react"
import categoryData from "../categoryData"
import cityData from "../cityData"

export default class RouletteForm extends Component {
  state = {
    locationInput: "",
    categoryInput: "",
    buttonActive: true
  }

  handleDropdown = (e, data) => {
    const targetValue = data.value
    const targetName = data.name
    this.setState({ [targetName]: targetValue })
    // if (this.state.locationInput && this.state.categoryInput) {
    //   this.setState({ buttonActive: false })
    // }
  }

  render() {
    const { updateState, handleDropdown, handleSpin } = this.props
    const { categoryInput, locationInput } = this.state
    const isEnabled = categoryInput && locationInput
    // console.log(isEnabled)
    return (
      <div>
        <Form onSubmit={e => handleSpin(e, this.state)}>
          <Form.Group textAlign="center" color="teal" widths="equal">
            <Form.Field>
              <Dropdown.Header as="h1" inverted>
                Select Category
              </Dropdown.Header>
              <Dropdown
                minCharacters={1}
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
                minCharacters={1}
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
            <Form.Field
              control={Button}
              disabled={!isEnabled}
              style={{ backgroundColor: "#F9CF00", color: "black" }}
              primary
            >
              SPIN DAT ISH
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
