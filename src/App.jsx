import React from 'react'
import TitleSection from './components/TitleSection'
import StlViewer from './components/StlViewer'
import GLBViewer from './components/GlbViewer'
import ButtonSection from './components/ButtonSection'
import Leg from "./assets/Leg.png"

const App = () => {
  return (
    <>
      <div className='px-8 mt-3'>
        <TitleSection />
        <div className='w-full flex flex-row gap-3 mt-3'>
          <div className='w-[35%] skyblue-box'>
            <div className='p-2'>
              <img src={Leg} className='w-full'/>
            </div>
          </div>
          <div className='w-[65%] skyblue-box'>
            <div className='font-bold'>
              Press the corresponding "Use" button to invoke a moment for the respective action.
            </div>
            <div className='flex flex-row gap-3 mt-6'>
              <div className='flex flex-col gap-3 w-[33%]'>
                <ButtonSection description={"Move Servo 1"}/>
                <ButtonSection description={"Move Servo 2"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
              </div> 
              <div className='flex flex-col gap-3 w-[33%]'>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
              </div> 
              <div className='flex flex-col gap-3 w-[33%]'>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
                <ButtonSection description={"Lorem Ipsem"}/>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App