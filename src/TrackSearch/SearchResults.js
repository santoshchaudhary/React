import React, { Component } from 'react'
import TrackList from './TrackList'
import './SearchBar.css';

export class SearchResults extends Component {
    render() {
        return (
            <div className='SearchResults'>
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        )
    }
}

export default SearchResults


