import React from 'react'
import { Select } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Basic = () => {
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
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>
          Select basic is text box without any custom like validation or style
          rounded. Basic is flat.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <Select
          data={genders}
          label="Gender"
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

export default Basic
