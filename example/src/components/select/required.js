import React from 'react'
import { Select } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Required = () => {
  const gender = UseFormInput('')
  const genders = [
    {
      name: 'Male',
      value: 'male'
    },
    {
      name: 'Female',
      value: 'female'
    }
  ]

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Required</div>
        <p>
          Give a mandatory form on option. We can custom error mandatory or
          mandatory message.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <Select isRounded label="Gender" isRequired data={genders} name='name' value='value' onChange={gender.onChange} />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              gender: gender.value
            },
            null,
            4
          )}
        </pre>
      </div>
    </div>
  )
}

export default Required
