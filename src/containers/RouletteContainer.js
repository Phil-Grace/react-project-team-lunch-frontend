import React, { Component } from "react";
import RouletteWheel from "../components/RouletteWheel";
import RouletteForm from "../components/RouletteForm";
import { Button } from 'semantic-ui-react'
import FoodCard from "../components/FoodCard";

export default class RouletteContainer extends Component {

    
  render() {
    return (
      <div>
        <RouletteForm />
        <RouletteWheel />
        <Button primary>Ready?</Button>
        <FoodCard />
      
      </div>
    );
  }
}
