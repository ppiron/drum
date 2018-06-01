import React from 'react';

export default function Audio(props) {
  const { desc, src, play, id, click, end } = props;
  return (
    <div id={desc} className='drum-pad' onClick={(event) => click(id, event)}
       tabIndex='0'>
      <audio id={id} src={src} autoPlay={play} onEnded={end} 
        className='clip'></audio>
      {id}
    </div>
  )
}