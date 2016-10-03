import React from 'react';

const Playlist = props => {
  let className = '';

  if (props.id === props.selectedPlaylistId) {
    className = 'selected';
  };

  return (
    <li className={className}>
      {props.name}
    </li>
  )
}

export default Playlist;
