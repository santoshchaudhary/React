import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'John'
        }
        console.log('LifecycleA constructor!')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LifecycleA getDerivedStateFromProps!')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount!')
    }
    
    shouldComponentUpdate() { 
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) { // Rarely Used
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    
    
    changeState = () => {
        this.setState({
            name: 'Evolution'
        })
    }
    
    
    render() {
        console.log('LifecycleA Render!')
        return (
            <div>
                <h2>LifecycleA</h2>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
