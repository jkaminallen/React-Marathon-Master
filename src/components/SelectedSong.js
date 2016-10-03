import React from 'react';

const SelectedSong = props => {
  return (
    <ul className="SelectedSong">
      <li>{props.songInfo.name}</li>
      <li>{props.songInfo.artist}</li>
      <li>{props.songInfo.album}</li>
    </ul>
  )
}

export default SelectedSong;
