import React, { Component } from "react"
import { Button, Form, Search } from "semantic-ui-react"
import { Link } from "react-router-dom"
import _ from "lodash"

export default class MemberForm extends Component {
  render() {
    const { handleChange, saveTeamMembers } = this.props
    // console.log(this.props)
    return (
      <div>
        <Form onSubmit={saveTeamMembers}>
          <Form.Field widths="equal">
            <Search
              style={{ margin: "0 20px" }}
              onSearchChange={_.debounce(
                (event, { value }) => handleChange(event, value),
                500
              )}
              showNoResults={false}
            />
          </Form.Field>
          <Button
            as={Link}
            name="roulette"
            to="roulette"
            style={{ backgroundColor: "#F9Cf00", color: "black", fontFamily: "Arvo" }}

          >
            Ready for Lunch?
          </Button>
        </Form>
      </div>
    )
  }
}
