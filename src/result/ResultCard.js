// Render the restaurant that is fetched
import React, { Component } from "react"
import { Card, Icon, Image, Button } from "semantic-ui-react"

class ResultCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Restaurant Name</Card.Header>
            <Card.Description>Restaurant Descp</Card.Description>
          </Card.Content>
          <Button primary>Spin Again</Button>
          <Button primary>OK</Button>
        </Card>

        {/* Restaurant Address  */}
        {/* Restaurant Image  */}
        {/* Restaurant Category */}
        {/* Restaurant Price Range */}
        {/* <button>Spin Again</button> 
                <button>OK</button> */}
        {/* Counter at the bottom to say user has X more spins */}
        {/* ROUTE TO ROULETTE CARD */}
      </div>
    )
  }
}

export default ResultCard
