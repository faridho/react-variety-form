import React from 'react'
import { TextArea } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Basic = () => {
  const address = UseFormInput('')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>Give count down inputed on right button component.</p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextArea isRequired isRounded countDown maxLength={50} onChange={address.onChange} />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              address: address.value
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
