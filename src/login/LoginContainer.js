import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Button } from "semantic-ui-react";
import NewUserForm from "./NewUserForm";


export default class Login extends Component {
  state = {
    showLoginForm: true
  };


  

  render() {
    const { showLoginForm } = this.state;
    return (
      <div className="login-container">
        {/* {showLoginForm ? <LoginForm /> : <NewUserForm /> */}
        <LoginForm getUserId={this.props.getUserId}/>
      </div>
    );
  }
}
