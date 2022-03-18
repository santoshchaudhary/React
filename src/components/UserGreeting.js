import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {

        // first approach 
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome John</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        
        // Second approach 
        return this.state.isLoggedIn ? (
        <div>Welcome John</div> 
        ) : (
        <div>Welcome Guest</div>
        )
        
    }
}

export default UserGreeting
