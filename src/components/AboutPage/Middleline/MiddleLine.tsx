import React from 'react'
import WideImage from '../../Shared/WideImage/WideImage'
import KickstartLine from '../../Shared/KickstartLine/KickstartLine'
import List from '../../HomePage/EndSection/List/List'
import OurTeam from './OurTeam/OurTeam'

const MiddleLine : React.FC = () => {
  return (
    <div className='flex flex-col items-center w-[1440px] mt-[-60px]'>
        <WideImage />
        <KickstartLine text='About Us' colorType='secondary' repeat={6} />
        <List />
        <OurTeam />
    </div>
  )
}

export default MiddleLine