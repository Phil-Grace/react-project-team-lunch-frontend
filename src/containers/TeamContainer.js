import React, { Component } from 'react'
import NewTeamForm from '../TeamComponents/NewTeamForm'
import TeamSelection from '../TeamComponents/TeamSelection'

export default class TeamContainer extends Component {

    state = {
        unselected: [],
        selected: [] 
    }

    updateTeam = (id) => {
    let unselected = this.state.unselected.filter(person => person.id !== id)
    let selected = this.state.unselected.filter(person => person.id === id)
    this.setState({unselected})
    this.setState({selected})
    }

    render() {
        const {allUsers} = this.props
        return (
            <div>
                <NewTeamForm />
                <TeamSelection allUsers={allUsers}/>
                
            </div>
        )
    }
}
