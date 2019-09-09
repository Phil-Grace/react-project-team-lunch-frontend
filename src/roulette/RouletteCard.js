import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class RouletteCard extends Component {
    render() {
        return (
            <div>
                Chosen Preference: 
                {/* props roulette container*/}
                {/* Roulette Graphic */}
                <Button primary>Spin!</Button>
                {/* ROUTE TO FOOD CARD */}
            </div>
        )
    }
}
