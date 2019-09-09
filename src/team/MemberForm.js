import React, { Component } from "react";
import { Button, Form, Search } from "semantic-ui-react";
import _ from "lodash";

export default class MemberForm extends Component {

  render() {
    const { handleChange, saveTeamMembers } = this.props
    // console.log(this.props)
    return (
      <div>
        <Form>
          <Form.Field widths="equal">
            <label>Find Team Members</label>
            <Search
              onSearchChange={_.debounce(
                (event, { value }) => handleChange(event, value),
                500
              )}
              showNoResults={false}
            />
          </Form.Field>
          <Button onClick={saveTeamMembers} primary >Ready for Lunch?</Button> 
        </Form>
      </div>
    );
  }
}
