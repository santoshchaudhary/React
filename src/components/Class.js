import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello, this...'
        }
    }
    
    clickHandler() {
        console.log('Button clicked!')
    }

    // clickThis() {
    //     this.setState({
    //         message: 'Godbye...'
    //     })
    //     console.log(this)
    // }

    clickThis = () => {
        this.setState({
            message: 'Godbye...'
        })
        console.log(this)
    }

    render() {
        const {name, heroName, children} = this.props
        // const {state1, state2} = this.state
        return (
            <div>
                <h1>Welcome, {name} a known as {heroName}</h1>
                <h5>{children}</h5>

                <button onClick={this.clickHandler}>Click me</button>

                {/* this keyword in react */}
                <div className='this-wrap'>
                    <div>{this.state.message}</div>
                    {/* <button onClick={this.clickThis.bind(this)}>This click</button> */}
                    {/* <button onClick={() => this.clickThis()}>This click</button> */}
                    <button onClick={this.clickThis}>This click</button>

                </div>
            </div>
        )
    }
}

// export default Welcome;