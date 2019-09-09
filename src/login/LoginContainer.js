import React, { Component } from 'react'
import LoginForm from './LoginForm'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

handleSubmit = () => {

}



    render() {
        return (
            <div>
              <LoginForm />  
            </div>
        )
    }
}
