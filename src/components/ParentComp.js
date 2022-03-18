import React, { Component } from 'react'

import PureComp from './PureComp'
import RegularComp from './RegularComp'

import Memo from './Memo'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'John'
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'John'
            })
        }, 2000)
    }
    
    
    
    render() {
        return (
            <div>
                Parent Comp
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>

                <Memo name={this.state.name}></Memo>
            </div>
        )
    }
}

export default ParentComp
