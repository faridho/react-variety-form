import React from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Email = () => {
  const email = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Email</div>
        <p>
          Sometimes we need to give validation for email input before send as payload api.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox
          label='Email'
          maxLength={30}
          isRounded
          isRequired
          isEmail
          placeholder='jhon.doe@yahoo.com'
          onChange={email.onChange}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              email: email.value
            },
            null,
            4
          )}
        </pre>
      </div>
    </div>
  )
}

export default Email
