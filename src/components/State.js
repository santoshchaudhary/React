import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome Visitor',
            count: 0,
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribing!',
        })
    }
    increment() {
        this.setState({
            count: this.state.count + 1
            
        })
        console.log(this.state.count)
    }
    
    render() {
        return (
            <div className='state-wrap'>
                <h1>For state: {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>

                <div>
                    <h2>Count: {this.state.count}</h2>
                    <button onClick={() => this.increment()}>Increment</button>

                </div>
            </div>
        )
    }
}
