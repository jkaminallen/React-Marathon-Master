import React from 'react';
import Playlist from './Playlist';

const PlaylistCollection = props => {
  let playlists = props.playlists.map(playlist => {
    return (
      <Playlist
        key = {playlist.id}
        id = {playlist.id}
        name = {playlist.name}
        songs = {playlist.songs}
        selectedPlaylistId = {props.selectedPlaylistId}
      />
    )
  });


  return(
      <div className="small-4 columns PlaylistCollection" >
        <ul>
          {playlists}
        </ul>
      </div>
  );
};

export default PlaylistCollection;
