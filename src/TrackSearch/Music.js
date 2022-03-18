import React, { Component } from 'react'

import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './uitl/Spotify';


class Music extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             SearchResult: [],
             playlistName: 'New Playlist',
             playlistTrack: []
        };

        this.search = this.search.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this)
        this.updatePlaylistName = this.updatePlaylistName.bind(this)
        this.savePlaylist = this.savePlaylist.bind(this)
        this.removeTrackSearch = this.removeTrackSearch.bind(this)
        this.doThese = this.doThese.bind(this)
    }

    search(term) {
        Spotify.search(term).then(SearchResult => {
            this.setState({SearchResults: SearchResults});
        });
    }
    
    addTrack(track) {
        let tracks = this.state.playlistTrack;
        if(tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track);
        this.setState({playlistTrack: track});
    }

    removeTrack(track) {
        let tracks = this.state.playlistTrack;
        let trackSearch = this.state.SearchResults;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        trackSearch.unshift(track);
        this.setState({
            playlistTrack: tracks
        });
    }

    removeTrackSearch(track) {
        let tracks = this.state.SearchResults;
        tracks = tracks.filter(currentTrack =? currentTrack.id !== track.id);
        this.setState({SearchResults: tracks});
    }

    doThese(track) {
        this.addTrack(track);
        this.removeTrackSearch(track);
    }

    updatePlaylistName(name) {
        this.setState({updatePlaylistName: name});
    }

    savePlaylist() {
        const trackUris = this.state.playlistTrack.map(track => track.uri);
        Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
            this.setState({
                updatePlaylistName: "New Play list",
                playlistTrack: []
            });
        });
    }
    render() {
        return (
            <div>
                <h1>
                    <a href='http:/localhost:3000'>Musicophile</a>
                </h1>
                <div className='App'>
                    <SearchBar onSeach={this.search} />
                    <div className='App-playlist'>
                        <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese} />
                        <Playlist playlistTrack={this.state.playlistTrack} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist}  />
                    </div>
                </div>
            </div>
        )
    }
}

export default Music
