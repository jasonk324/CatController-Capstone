import React from 'react'

const ButtonSection = ({description}) => {
  return (
    <>
      <div className='flex flex-row items-center gap-3'>
        <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-pink-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Use</span>
        </a>
        <div className='text-white font-bold'>
          {description}
        </div>
      </div>
    </>
  )
}

export default ButtonSection