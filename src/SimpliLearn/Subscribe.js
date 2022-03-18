import React, { Component } from 'react'
import bellA from './1a.png'
import bellB from './1b.jpeg'
class Subscribe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Welcome on this!',
            sub: 'Subscribe',
            imageUrl: bellB,
        }
    }
    
    styles = {
        fontStyle: 'iitalic',
        color: 'purple'
    }
    ButtonChange = () => {
        this.setState({
            message: 'Hit the bell icon to never miss an update!',
            sub: 'Subscribed'
        })
    }
    ImageChange = () => {
        this.setState({
            imageUrl: bellA,
            message: "Thank you! Happy Learning"
        })
    }
    render() {
        return (
            <div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p>&nbsp;</p>
                <img style={{width: '30px', height: '30px'}} src={this.state.imageUrl} alt='' onClick={this.ImageChange} />
            </div>
        )
    }
}

export default Subscribe
