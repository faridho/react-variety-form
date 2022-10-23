import React from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Basic = () => {
  const fullName = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>
          Text Box basic is text box without any custom like validation or style rounded. Basic is flat.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox onChange={fullName.onChange} />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              fullName: fullName.value
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
