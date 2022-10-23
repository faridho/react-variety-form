import React from 'react'
import { Select } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Disable = () => {
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
        <div className='font-bold'>Disable & Selected</div>
        <p>Props disable will prevent user to select anymore options.</p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <Select
          isDisabled
          data={genders}
          name='name'
          value='value'
          selected='male'
          onChange={gender.onChange}
        />
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

export default Disable
