import React from 'react';
import {ReactComponent as VideoBG} from '../../../assets/icons/video.svg';

const Bg:React.FC = () => {
  return (
    <div className='absolute bottom-0 left-0 z-01'><VideoBG /></div>
  )
}

export default Bg