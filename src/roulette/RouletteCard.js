import React, { Component } from "react"
import { Card, Image, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const styleCard = {
  width: "300px",
  height: "300px"
}

const style = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center"
}
export default class RouletteCard extends Component {
  render() {
    const { yelpResults, indexArray, randomYelp, setResult } = this.props
    console.log(yelpResults)
    // TODO Need failsafe for bad yelp call
    let result =
      yelpResults.length > 0
        ? yelpResults[indexArray[indexArray.length - 1]]
        : null

    return yelpResults.length > 0 ? (
      <div style={style} className="roulette-card">
        <Card centered>
          <Image
            src={result.image_url}
            fluid
            wrapped
            ui={false}
            size="medium"
          />
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
          {indexArray.length === 3 ? (
            <Button
              onClick={() => randomYelp(indexArray)}
              style={{
                backgroundColor: "#F9Cf00",
                color: "black",
                fontFamily: "Arvo"
              }}
            >
              LAST SPIN!
            </Button>
          ) : indexArray.length > 3 ? null : (
            <Button
              onClick={() => randomYelp(indexArray)}
              style={{
                backgroundColor: "#F9Cf00",
                color: "black",
                fontFamily: "Arvo"
              }}
            >
              {4 - indexArray.length} Spins Remaining
            </Button>
          )}
          <Button
            as={Link}
            name="result"
            to="result"
            onClick={() => setResult(result)}
            style={{
              backgroundColor: "#F9Cf00",
              color: "black",
              fontFamily: "Arvo"
            }}
          >
            OK
          </Button>
        </Card>
      </div>
    ) : (
      <div>Loading....</div>
    )
  }
}
