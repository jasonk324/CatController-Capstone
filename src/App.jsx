import React from 'react'
import TitleSection from './components/TitleSection'
import StlViewer from './components/StlViewer'
import ButtonSection from './components/ButtonSection'
import GLBViewer from './components/GlbViewer'

const App = () => {
  return (
    <>
      <div className='px-8 mt-3'>
        <TitleSection />
        <div className='w-full flex flex-row gap-3 mt-3'>
          <div className='w-[50%] skyblue-box'>
          </div>
          <div className='w-[50%] skyblue-box'>
            <div className='flex flex-col'>
              <ButtonSection />
              <ButtonSection />
              <ButtonSection />
              <ButtonSection />
            </div>
          </div>
        </div>
        <GLBViewer />
      </div>
    </>
  )
}

export default App