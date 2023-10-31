import React from 'react'
import HelloKitty from '../assets/HelloKittyIcon.png'
import TMULogo from '../assets/TMULogo.png'

const TitleSection = () => {
  return (
    <div className='flex flex-col items-start w-full'>
      <div className='flex flex-row w-full items-center justify-between'>
        <div className='flex flex-row'>
          <div className='pink-circle w-16'>
            <img src={HelloKitty}/>
          </div>
          <div className='pink-box'>
            <div className='text-3xl font-bold'>Robotic Cat</div>
          </div>
        </div>
        <div className='w-32'>
          <img src={TMULogo}/>
        </div>
      </div> 
      <div className='m-1 p-2 font-bold text-sm pink-box'>
        ELE70A/B | Aaron Antony | Erika Tollet | Vanessa Hoang | Jason Khuu 
      </div>
    </div>
  )
}

export default TitleSection