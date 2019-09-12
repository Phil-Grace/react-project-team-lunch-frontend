import React, { Component } from "react"
import { Header, Image } from "semantic-ui-react"

export default class TeamUserAvatar extends Component {
  render() {
    const { user, addMember, removeMember } = this.props
    return (
      <div
        onClick={
          addMember
            ? event => addMember(event, user)
            : removeMember
            ? event => removeMember(event, user)
            : null
        }
      >
        <Header as="h2">
          <Image circular src={user.img_url} /> {user.username}
        </Header>
      </div>
    )
  }
}
