import React, { Component } from 'react'

import './Track.css'

class Track extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term: '',
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack(event) {
        this.props.onAdd(this.props.track)
    }

    removeTrack(event) {
        this.props.onRemove(this.state.track)
    }

    renderAction() {
        if(this.props.isRemoval) {
            return {
                <button className='Track-action' onclick={this.removeTrack}> - </button>
            };
        }
        return {
            <button className='Track-action' onclick={this.addTrack}> + </button>
        };
    }
 
    render() {
        return (
            <div className='Track'>
                <div className='Track-information'>
                    <h3>{this.props.name}</h3>
                    <p>
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                    <iframe 
                        src={"https://open.spotify.com/embed/track" + this.props.track.id}
                        width='300'
                        height='80'
                        frameborder='0'
                        allowtransparency='true'
                        allow='encrypted-media'
                        title='preview'
                    />
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;
