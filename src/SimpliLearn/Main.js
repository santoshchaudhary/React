import React, { Component } from 'react'
import Counter from './Counter'
import ParentComp from './ParentComp'
import Subscribe from './Subscribe'

class Main extends Component {

    top = {
        marginTop: '150px'
    }
    render() {
        return (
            <div>
                <Subscribe />


                <div style={this.top}>
                    <ParentComp />
                    <Counter />
                </div>
            </div>
        )
    }
}

export default Main

