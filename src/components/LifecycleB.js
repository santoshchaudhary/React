import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'John'
        }
        console.log('LifecycleB constructor!')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LifecycleB getDerivedStateFromProps!')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleB componentDidMount!')
    }
    

    shouldComponentUpdate() { 
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) { // Rarely Used
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }


    
    render() {
        console.log('LifecycleB Render!')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
