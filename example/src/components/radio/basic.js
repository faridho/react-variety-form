import React from 'react'
import { Radios } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Basic = () => {
  const education = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>
          For options you only create any element on an array. Then we will
          genarate optiosn as mush you create elements.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <Radios
          label='Last Education'
          name='education'
          options={['High School', 'Bachelor Degree', 'Master Degree']}
          onChange={education.onChange}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              education: education.value
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
