import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent Component'
        }
        this.parentSection = this.parentSection.bind(this);
    }

    parentSection(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.parentSection}/>
            </div>
        )
    }
}

export default ParentComponent
