import React from 'react'
import Required from './required'
import Email from "./email"
import Number from './number'
import CountDown from './countdown'

const TextBoxComponent = () => {
  return (
    <div className='w-full px-2'>
      <div className='p-4 mb-5 w-full bg-white rounded-lg border border-gray-rof-200'>
        <div className='w-full'>
          <h4 className='text-lg font-semibold text-blue-rof-100'>Text Box</h4>
          <p className='text-gray-black-100 text-sm'>
            Make your text box automatically works with validation number, email
            and show error as like you want to custom.
          </p>
          <hr className='my-5 h-px bg-gray-rof-200 border-0'></hr>
          <Required />
          <Email />
          <Number />
          <CountDown />
        </div>
      </div>
    </div>
  )
}

export default TextBoxComponent
