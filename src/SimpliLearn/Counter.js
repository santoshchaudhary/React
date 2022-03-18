import React, { Component } from 'react'
import UpdatedComp from './HigherOrder';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    IncrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        const {count} = this.state;
        return (
            <div>
                <button onMouseEnter={this.IncrementCounter}>
                    {this.props.name} Incremented to {count}
                </button>
            </div>
        )
    }
}

export default UpdatedComp(Counter);
