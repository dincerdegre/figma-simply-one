import React from 'react'
import Typo from './Typo/Typo'
import Color from './Color/Color'

const TypoColor : React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-[40px] w-[1440px]'>
        <Typo />
        <Color />
    </div>
  )
}

export default TypoColor