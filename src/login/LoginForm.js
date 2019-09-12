import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import {Link} from 'react-router-dom'
// import NewUserForm from "./NewUserForm";

const loginURL = "http://localhost:3000/login" // Host

export default class LoginForm extends Component {

    state = {
        usernameInput: '',
        passwordInput: ''
    }

    handleSubmit = () => {
        fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.jwt)
            this.props.getUser(data.user)
            this.props.fetchUsers()
            this.props.fetchTeams()
        })
        // .then(userdata => this.props.getUserId(userdata.results))
        .catch(err => console.log(err))
    }

    handleChange = e => {
        const targetValue = e.target.value
        const targetName = e.target.name
        this.setState({[targetName]: targetValue})
    }

    render() {
        // console.log(this.state)
        return (
        <div>
            <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                <Image src="/logo.png" /> Log-in to your account
                </Header>
                <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                    <Form.Input
                        onChange={this.handleChange}
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        type="text"
                        name="usernameInput"
                    />
                    <Form.Input
                        onChange={this.handleChange}
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="passwordInput"
                    />
                    <Button type="submit" color="teal" fluid size="large">
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                New to us? <Link to='/createaccount'>Create New Account</Link>
                </Message>
            </Grid.Column>
            </Grid>
            )
        </div>
        );
    }
}
