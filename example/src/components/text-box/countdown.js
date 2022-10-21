import React, { useState } from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from './use-form-input'

const CountDown = () => {
  const status = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Count Down</div>
        <p>
          Want to know how many characters when you type on text box?
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox
          label='Short Status'
          maxLength={50}
          isRounded
          countDown
          placeholder='What do you think?'
          onChange={status.onChange}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              status: status.value
            },
            null,
            4
          )}
        </pre>
      </div>
    </div>
  )
}

export default CountDown
