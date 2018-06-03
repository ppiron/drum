import React from 'react';

export default function Audio(props) {
  const { desc, src, id, isActive, click, end } = props;
  let className = 'drum-pad';
  if (isActive) {
    className += ' drum-pad-active';
  }
  return (
    <div id={desc} className={className} onClick={(event) => click(id, desc, event)}
       tabIndex='0'>
      <audio id={id} src={src} onEnded={() => end(id, desc)} 
        className='clip'></audio>
      <p>{desc}<br />{id}</p>
    </div>
  )
}