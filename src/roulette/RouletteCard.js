import React, { Component } from "react"
import { Card, Image, Button } from "semantic-ui-react"

export default class RouletteCard extends Component {
  state = {
    indexArray: [0]
  }

  randomYelp = array => {
    this.props.handleTimer()
    let randIndex = Math.floor(Math.random() * 10)
    while (array.includes(randIndex)) {
      randIndex = Math.floor(Math.random() * 10)
    }
    this.setState({ indexArray: [...this.state.indexArray, randIndex] })
  }

  render() {
    const { yelpResults } = this.props
    console.log(yelpResults)
    const { indexArray } = this.state
    // TODO Need failsafe for bad yelp call
    let result =
      yelpResults.length > 0
        ? yelpResults[indexArray[indexArray.length - 1]]
        : null
        
    console.log(result)

    return yelpResults.length > 0 ? (
      <div className="roulette-card">
        <Card>
          <Image src={result.image_url} wrapped ui={false} size="medium" />
          <Card.Content>
            <Card.Header>{result.name}</Card.Header>
            <Card.Description>
              {result.location.display_address}
            </Card.Description>
            <Card.Description>{result.display_phone}</Card.Description>
            <Card.Description>{result.rating} stars</Card.Description>
            <Card.Description>
              {result.price ? `Price: ${result.price}` : null}
            </Card.Description>
            <a href={result.url}>View on Yelp</a>
          </Card.Content>
          <Button onClick={() => this.randomYelp(indexArray)} primary>
            Spin Again
          </Button>
          <Button onClick={() => this.props.selectContainer()} primary>
            OK
          </Button>
        </Card>
      </div>
    ) : (
      <div>Loading....</div>
    )
  }
}
