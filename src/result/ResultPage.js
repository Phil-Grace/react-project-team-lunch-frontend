import React, { Component } from "react"
import { Card, Image, Header, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
const dancingGIF = "https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif"
const style = {
  margin: "0 20px",
  marginTop: "20px",
  backgroundColor: "#F9CF00",
  color: "BLACK",
  padding: '10px'
}

class ResultPage extends Component {
  render() {
    const { result, currentTeam } = this.props
    const { team_name } = currentTeam
    console.log(this.props)
    return (
      <div style={style} className="result-page">
        <Header as="h1" textAlign="center">
          Team {team_name}, y'all is headed to {result.name}!
        </Header>
        <Header as="h2" textAlign="center">
          Address: {result.location.display_address}
        </Header>
        <Header as="h4" textAlign="center">
          Phone: {result.display_phone}
        </Header>
        <Image src={dancingGIF} size="large" centered />
        <Button
          as={Link}
          name="roulette"
          to="roulette"
          primary
          style={{ backgroundColor: "#F9CF00", color: "black" }}
        >
          Play Again?
        </Button>
      </div>
    )
  }
}

export default ResultPage
