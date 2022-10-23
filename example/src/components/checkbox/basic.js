import React from 'react'
import { Checkbox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Basic = () => {
  const agree = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>
          Checkbox is good option to create agreement. You only give declaration or term.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <Checkbox isRequired onChange={agree.onChange} />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
                agree: agree.value
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
