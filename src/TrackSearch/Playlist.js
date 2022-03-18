import React, { Component } from 'react'
import './SearchBar.css';
import TrackList from './TrackList';



export class Playlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    render() {
        return (
            <div className='Playlist'>
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
                <TrackList track={this.props.playListTracks} isremoval={true} onRemove={this.props.onRemove} />
                <button className='' onclick={this.props.onSave}>Save to Stopify</button>
            </div>
        )
    }
}

export default Playlist
