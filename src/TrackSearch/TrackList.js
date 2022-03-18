import React, { Component } from 'react'
import Track from './Track'
import './TrackList.css'


class TrackList extends Component {
    render() {
        return (
            <div className='TrackList'>
                {this.props.tracks.map(track => {
                    return (
                        <Track
                        track={track}
                        key={track.id}
                        onAdd={this.props.onAdd}
                        isRemoval={this.props.isRemoval}
                        onremove={this.props.onRemove}
                         />
                    );
                })}
                
            </div>
        )
    }
}

export default TrackList;
