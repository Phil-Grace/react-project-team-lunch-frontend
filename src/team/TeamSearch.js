import React, { Component } from "react"
import TeamUserAvatar from "./TeamUserAvatar"
import { Header, Image } from "semantic-ui-react"

export default class TeamSearch extends Component {
  render() {
    const { filteredUsers, addMember } = this.props
    const mappedSearch = filteredUsers
      ? filteredUsers.map(user => (
          <TeamUserAvatar user={user} addMember={addMember} />
        ))
      : null
    return <div>{mappedSearch}</div>
  }
}
