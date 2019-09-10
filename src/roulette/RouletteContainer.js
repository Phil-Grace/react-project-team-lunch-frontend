import React, { Component } from "react"
import RouletteCard from "./RouletteCard"
import RouletteForm from "./RouletteForm"
import ResultCard from "../result/ResultCard"
import SpinButton from "./SpinButton"

export default class RouletteContainer extends Component {
  state = {
    // locationInput: "",
    // categoryInput: ""
    // yelpResults: []
  }

  handleSpin = (e, data) => {
    this.props.fetchYelp(data.locationInput, data.categoryInput)
  }

  render() {
    const { fetchYelp, yelpResults } = this.props
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div>
        <RouletteForm
          handleDropDown={this.handleDropdown}
          handleSpin={this.handleSpin}
          fetchYelp={fetchYelp}
        />
        <RouletteCard yelpResults={this.props.yelpResults} />
        {/* <SpinButton /> */}
        {/* <ResultCard />  */}
      </div>
    )
  }
}
