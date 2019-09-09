import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import RouletteCard from "./RouletteCard";
import RouletteForm from "./RouletteForm";

export default class RouletteContainer extends Component {

  render() {
    return (
      <div>
        <RouletteForm />
        <RouletteCard />
        <Button primary>Ready?</Button>      
      </div>
    );
  }
}
