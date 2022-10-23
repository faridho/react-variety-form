import React from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Number = () => {
  const phone = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Number</div>
        <p>
          Input validation for number necessary.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox
          label='Phone Number'
          maxLength={16}
          isRounded
          isRequired
          isNumberOnly
          placeholder='0898 9098 8786'
          onChange={phone.onChange}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              phone: phone.value
            },
            null,
            4
          )}
        </pre>
      </div>
    </div>
  )
}

export default Number
