import React from 'react'
import Basic from './basic'
import Disable from './disable'

const TextAreaComponent = () => {
  return (
    <div className='w-full px-2'>
      <div className='p-4 mb-5 w-full bg-white rounded-lg border border-gray-rof-200'>
        <div className='w-full'>
          <h4 className='text-lg font-semibold text-blue-rof-100'>Text Area</h4>
          <p className='text-gray-black-100 text-sm'>
            Give a wide text expression on text area and give validation required or disable.
          </p>
          <hr className='my-5 h-px bg-gray-rof-200 border-0'></hr>
          <Basic />
          <Disable />
        </div>
      </div>
    </div>
  )
}

export default TextAreaComponent
