import React from 'react'
import { TextBox, TextArea, Select } from 'react-variety-form'
import 'react-variety-form/dist/index.css'

const App = () => {
  return (
    <div className='mt-36 px-2'>
      <div className=' w-full flex flex-row'>
        <div className='w-6/12'>
          <TextBox
            label='First Name'
            placeholder='First Name'
            isRequired={true}
            maxLength={20}
            isError={true}
            errorCause='Please fill first name'
            countDown={false}
          />
        </div>
        <div className='w-6/12'>
        <Select />
        </div>
      </div>
      <div className='w-full flex flex-row'>
        <div className='w-6/12'>
          <TextArea
            label='Address'
            placeholder='Address'
            rows={3}
            maxLength={120}
            countDown={true}
          />
        </div>
      </div>
    </div>
  )
}

export default App
