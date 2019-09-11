import React, { Component } from "react";
import { Form, Button, Image, Header, Grid, Card } from "semantic-ui-react";
import UserAvatars from "./UserAvatars";
const loginURL = "http://localhost:3000/login";

const URL = "http://localhost:3000/users";

class NewUserForm extends Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    img_url:
      "https://i2.wp.com/www.ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204",
    titleInput: ""
  };

  handleSubmit = () => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.usernameInput,
        password: this.state.passwordInput,
        title: this.state.titleInput,
        img_url: this.state.img_url
      })
    })
      .then(res => res.json())
      // .then(console.log.results)
      .then(data => {
        console.log(data)
        localStorage.setItem("token", data.jwt);
        this.props.getUser(data.user);
        this.props.fetchUsers();
        this.props.fetchTeams();
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const targetValue = e.target.value;
    const targetName = e.target.name;
    this.setState({ [targetName]: targetValue });
  };

  selectImage = e => {
    this.setState({ img_url: e.target.src });
  };

  render() {
    const { usernameInput, passwordInput, img_url, titleInput } = this.state;
    console.log(this.state);

    const mappedAvatars = UserAvatars.map(img => (
      <Image circular src={img} size="tiny" onClick={this.selectImage} />
    ));

    return (
      <div>
        <Grid columns={2} divided>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit} size="big" widths="equal">
              <Form.Group>
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  label="Username"
                  placeholder="Enter username"
                  name="usernameInput"
                />
              </Form.Group>
              <Form.Input
                onChange={this.handleChange}
                fluid
                label="Title"
                placeholder="Enter Title"
                name="titleInput"
              />
              <Form.Group>
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  label="Password"
                  placeholder="Enter password"
                  name="passwordInput"
                  type="password"
                />
              </Form.Group>
              <Image.Group itemsPerRow={5}>
                <Header as="h2">Choose Your Avatar</Header>
                {mappedAvatars}
              </Image.Group>
              <Button content="Submit" type="submit" />
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={img_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Username: {usernameInput}</Card.Header>
                <Card.Description>Title: {titleInput}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default NewUserForm;

// <Segment.Group>
// <Label circular as='a' attached="top" image={imageProps} />
//     {/* // <img src={UserAvatars[0]} width="1000" height="1000"/> */}
// {/* </Label> */}
// <Form.Radio
//   name="avatar-group"
//   value={UserAvatars[0]}
//   checked={img_url === UserAvatars[0]}
//   onChange={this.handleRadioChange}
//   img src={UserAvatars[0]}
// />
// </Segment.Group>
