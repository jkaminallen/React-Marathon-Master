import React from 'react';

const Song = props => {
  let className = '';
  let asterisk = '';
  if (props.selectedSongId === props.id) {
    className = 'selected';
    asterisk = '*';
  };

  return (
    <li className={className}>      
      <button type="button" onClick={props.handleButtonClick}>{asterisk}{props.name}</button>
    </li>
  )
}

export default Song;
