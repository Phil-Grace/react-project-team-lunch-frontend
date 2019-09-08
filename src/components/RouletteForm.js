import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class RouletteForm extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="sushi">Sushi</option>
                    <option value="mexican">Mexican</option>
                    <option selected value="american">
                        American
                    </option>
                    <option value="Salad">Salads</option>
                </select>


            </div>
        )
    }
}
