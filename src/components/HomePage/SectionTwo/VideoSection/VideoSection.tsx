import React from 'react'
import { ArrowIcon } from '../../../../assets/icons/icons'

const VideoSection : React.FC = () => {
  return (
    <div className='h-[600px] self-stretch bg-video-image bg-cover bg-center bg-gray-300 relative'>
        <span className='text-[24px] leading-[40px] font-light font-inter absolute right-[684px] top-[243px] bg-transparent text-white'>VIDEO</span>
        <span className='absolute right-[60px] bottom-[60px]'><ArrowIcon className="fill-primary" /></span>
    </div>
  )
}

export default VideoSection