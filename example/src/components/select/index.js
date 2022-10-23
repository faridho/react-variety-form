import React from 'react'
import Basic from './basic'
import Required from './required'
import Disable from "./disable"

const SelectComponent = () => {
  return (
    <div className='w-full px-2'>
      <div className='p-4 mb-5 w-full bg-white rounded-lg border border-gray-rof-200'>
        <div className='w-full'>
          <h4 className='text-lg font-semibold text-blue-rof-100'>Select</h4>
          <p className='text-gray-black-100 text-sm'>
            Options are almost always there on any form. Now, you dont feel throuble again with element style for select.
          </p>
          <hr className='my-5 h-px bg-gray-rof-200 border-0'></hr>
          <Basic />
          <Required />
          <Disable />
        </div>
      </div>
    </div>
  )
}

export default SelectComponent
