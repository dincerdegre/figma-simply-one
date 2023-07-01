import React from 'react';
import Bg from './Bg/Bg';
import { ReactComponent as HeroButton } from "../../assets/icons/hero-button.svg";


const Video: React.FC = () => {
  return (
    <div className='h-[600px] w-full relative'>
        <span className='absolute bg-transparent text-white z-10 right-[684px] top-[243px] text-[24px]'>VIDEO</span>
        <span className='absolute z-10 right-[60px] bottom-[60px]'><HeroButton /></span>
        <Bg />
    </div>
  )
}

export default Video