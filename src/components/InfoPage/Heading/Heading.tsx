import React from 'react'

interface Props {
    text: string;
}

const Heading : React.FC<Props> = ({text}) => {
  return (
    <div className='flex justify-center items-end w-[1440px]'><h2 className='w-[1320px] text-[56px] leading-[72px] font-primary font-light'>{text}</h2></div>
  )
}

export default Heading