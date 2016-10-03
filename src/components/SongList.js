import React from 'react';
import Song from './Song';

const SongList = props => {
  let songs = props.songlist.map(song => {
    return (
      <Song
        key = {song.id}
        id = {song.id}
        name = {song.name}
        artist = {song.artist}
        album = {song.album}
        selectedSongId = {props.selectedSongId}
        handleButtonClick = {props.handleButtonClick}
      />
    )
  });


  return(
      <div className="small-4 columns SongList">
        <ul>
          {songs}
        </ul>
      </div>
  );
};

export default SongList;
