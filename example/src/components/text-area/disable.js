import React from 'react'
import { TextArea } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Disable = () => {
  const address = UseFormInput('SCBD Kav. 50, Jakarta')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Disable</div>
        <p>Pevent user to edit and give disable style.</p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextArea
          isDisabled
          value={address.value}
          onChange={address.onChange}
        />
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

export default Disable
