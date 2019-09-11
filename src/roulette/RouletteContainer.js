import React, { Component } from "react"
import RouletteCard from "./RouletteCard"
import RouletteForm from "./RouletteForm"
import ResultCard from "../result/ResultCard"
import SpinButton from "./SpinButton"

export default class RouletteContainer extends Component {
  state = {
    showRouletteForm: true
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
    this.props.fetchUsers();
    this.props.fetchTeams();
  }

  handleSpin = (e, data) => {
    this.props.fetchYelp(data.locationInput, data.categoryInput)
    this.setState({showRouletteForm: false})
  }

  render() {
    const { fetchYelp, yelpResults } = this.props
    const { showRouletteForm } = this.state
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div className="roulette-container">
        {
          showRouletteForm ? 
          <RouletteForm
            handleDropDown={this.handleDropdown}
            handleSpin={this.handleSpin}
            fetchYelp={fetchYelp}
          /> : 
          <RouletteCard 
            yelpResults={yelpResults} 
            handleSpin={this.handleSpin}
            selectContainer={this.props.selectContainer}
          />
        }
      </div>
    )
  }
}
