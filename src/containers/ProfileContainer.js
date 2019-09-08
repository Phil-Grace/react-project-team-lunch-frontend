import React, { Component } from "react";
import UserProfile from "../UserComponents/UserProfile";

export default class ProfileContainer extends Component {
  render() {
    const {currentUser} = this.props
    console.log(currentUser)
    return (
      <div className="profile-container">
        <UserProfile />
      </div>
    );
  }
}
