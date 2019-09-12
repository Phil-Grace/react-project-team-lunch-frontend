import React, { Component } from "react"
import RouletteCard from "./RouletteCard"
import RouletteForm from "./RouletteForm"
import { Image } from "semantic-ui-react"
const spinning_pizza = 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3o7bu8sRnYpTOG1p8k%2Fgiphy.gif'

const style = {
  // color: 'white',
  textAlign: 'center',
  padding: '10px 10px',
  color: 'black'
}


export default class RouletteContainer extends Component {
  state = {
    showRouletteForm: true,
    showPizza: false,
    showCard: false,
    indexArray: [0]
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
    this.props.fetchUsers();
    this.props.fetchTeams();
    console.log('roulette')
  }

  handleSpin = (e, data) => {
    this.props.fetchYelp(data.locationInput, data.categoryInput)
    this.setState({
      showRouletteForm: false,
      showPizza: true,
    })
    this.handleTimer()
  }
  
  handleTimer = () => {
    // countdown a couple seconds changing the set to pizza: true, card: false and back
    this.setState({showPizza: true, showCard: false})
    this.intervalID = setInterval(() => {
      this.setState({showPizza: false, showCard: true})
      console.log('pizza')
      clearInterval(this.intervalID)
    }, 3000)
  }

  randomYelp = array => {
    this.handleTimer()
    let randIndex = Math.floor(Math.random() * 10)
    while (array.includes(randIndex)) {
      randIndex = Math.floor(Math.random() * 10)
    }
    this.setState({ indexArray: [...this.state.indexArray, randIndex] })
  }

  render() {
    const { fetchYelp, yelpResults, setResult } = this.props
    const { showRouletteForm, showPizza, showCard, indexArray } = this.state
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div style={style} className="roulette-container">

          {showRouletteForm ? 
          <RouletteForm
            handleDropDown={this.handleDropdown}
            handleSpin={this.handleSpin}
            fetchYelp={fetchYelp}
          /> : null }

          {showPizza ? <Image src={spinning_pizza}/> : null}

          {showCard ? <RouletteCard 
            yelpResults={yelpResults} 
            handleSpin={this.handleSpin}
            selectContainer={this.props.selectContainer}
            handleTimer={this.handleTimer}
            randomYelp={this.randomYelp}
            indexArray={indexArray}
            setResult={setResult}
          /> : null}
      </div>
    )
  }
}
