import React from 'react'
import Basic from './basic'

const RadioComponent = () => {
  return (
    <div className='w-full px-2'>
      <div className='p-4 mb-5 w-full bg-white rounded-lg border border-gray-rof-200'>
        <div className='w-full'>
          <h4 className='text-lg font-semibold text-blue-rof-100'>Radio Button</h4>
          <p className='text-gray-black-100 text-sm'>
            You can add any options on radio button easy to make element on array.
          </p>
          <hr className='my-5 h-px bg-gray-rof-200 border-0'></hr>
          <Basic />
        </div>
      </div>
    </div>
  )
}

export default RadioComponent
