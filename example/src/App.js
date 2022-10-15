import React from 'react'
import { TextBox, TextArea } from 'react-variety-form'
import 'react-variety-form/dist/index.css'

const App = () => {
  return (
    <div className='mt-36 px-2'>
      <div className=' w-full flex flex-row'>
        <div className='w-6/12'>
          <TextBox
            label='Full Name'
            placeholder='Full Name'
            isRequired={true}
            maxLength={120}
            isNumberOnly={false}
            isError={true}
            errorCause='Please fill it'
            countDown={false}
          />
        </div>
        <div className='w-6/12'>
          <TextBox
            label='Full Name'
            placeholder='Full Name'
            isRequired={false}
            maxLength={120}
            isNumberOnly={false}
            isError={true}
            countDown={true}
          />
        </div>
      </div>
      <div className='w-full flex flex-row'>
        <div className='w-12/12'>
          <TextArea
            label='Address'
            placeholder='Address'
            rows={3}
            isRequired={true}
            maxLength={120}
            isNumberOnly={false}
            isError={true}
            errorCause='Please fill it'
            countDown={true}
          />
        </div>
      </div>
    </div>
  )
}

export default App
