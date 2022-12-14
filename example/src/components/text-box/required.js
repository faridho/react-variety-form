import React from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Required = () => {
  const fullName = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Required</div>
        <p>
          Give a mandatory form on the text box. We can custom error
          mandatory or mandatory message.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox maxLength={20} isRounded isRequired onChange={fullName.onChange} />
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

export default Required
