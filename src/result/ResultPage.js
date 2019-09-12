import React, { Component } from "react"
import { Card, Image, Header } from "semantic-ui-react"
const dancingGIF = 'https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif'

class ResultPage extends Component {
  render() {
    const { result, currentTeam } = this.props
    const {team_name} = currentTeam
    console.log(this.props)
    return (
      <div className="result-page">
        {/* <Card> */}
          <Header as='h1' textAlign='center'>Team {team_name}, y'all is headed to {result.name}!</Header>
          <Header as='h2' textAlign='center' >Address: {result.location.display_address}</Header>
          <Header as='h4' textAlign='center' >Phone: {result.display_phone}</Header>
          <Image src={dancingGIF} size="large" centered />
        {/* </Card> */}
      </div>
    )
  }
}

export default ResultPage
