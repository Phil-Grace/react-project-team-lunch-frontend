
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


export default class LoginForm extends Component {

    state = {
        usernameInput: '',
        passwordInput: ''
    }

    render() {
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
                <Form size="large" onSubmit={this.handleChange}>
                <Segment stacked>
                    <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    type="password"
                    name="username"
                    />
                    <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    />

                    <Button color="teal" fluid size="large">
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                New to us? <a href="#">Sign Up</a>
                </Message>
            </Grid.Column>
            </Grid>
            )
        </div>
        );
    }
}
