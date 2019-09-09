import React, { Component } from "react";
import RouletteCard from "./RouletteCard";
import RouletteForm from "./RouletteForm";
import SpinButton from "./SpinButton";


export default class RouletteContainer extends Component {

  state = {
    locationInput: "",
    categoryInput: ""
  };



  // updateState = (s) => {
  //   console.log(s)

  //   this.setState({})
  // }

  handleSubmit = () => {

  }

  handleDropDown (e, data) {
    console.log(e)
    console.log(data)
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <RouletteForm handleDropDown={this.handleDropdown} updateState={this.updateState}/>
        <RouletteCard yelpResults={this.props.yelpResults}/> 
        <SpinButton />

      </div>
    );
  }
}
