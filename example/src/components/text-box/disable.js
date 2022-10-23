import React from 'react'
import { TextBox } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Disable = () => {
  const id = UseFormInput('KA-898090')

  return (
    <div>
      <div className=' text-gray-black-100 text-sm pt-5'>
        <div className='font-bold'>Disable & Selected</div>
        <p>
          Deactivated text box to prevent user edit or give a marker what tex box dont allow to edit.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <TextBox
          label='ID'
          isRounded
          isDisabled
          value={id.value}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
              id: id.value
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
