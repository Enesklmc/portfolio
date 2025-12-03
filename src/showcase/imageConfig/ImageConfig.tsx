import React from 'react';
import './ImageConfig.css';
import imgRoom from './room.jpg';

const ImageConfig = () => {
  return (
    <div className='imageConfigRoot'>
      <div className='imageConfigWall'></div>
      <div className='imageConfigControls'>controls</div>
    </div>
  );
};

export default ImageConfig;
