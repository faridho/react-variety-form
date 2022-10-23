import React from 'react'
import Basic from './basic'

const CheckboxComponent = () => {
  return (
    <div className='w-full px-2'>
      <div className='p-4 mb-5 w-full bg-white rounded-lg border border-gray-rof-200'>
        <div className='w-full'>
          <h4 className='text-lg font-semibold text-blue-rof-100'>Check Box</h4>
          <p className='text-gray-black-100 text-sm'>
            Making agreement with checkbox inside declaration.
          </p>
          <hr className='my-5 h-px bg-gray-rof-200 border-0'></hr>
          <Basic />
        </div>
      </div>
    </div>
  )
}

export default CheckboxComponent
