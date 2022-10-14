import React from 'react'
import { TextBox } from 'react-variety-form'
import 'react-variety-form/dist/index.css'

const App = () => {
  return (
    <div className='mt-36 px-48'>
      <TextBox
        label="Full Name"
        placeholder="Full Name"
        isRequired={true}
        maxLength={10}
        isNumberOnly={false}
        isError={false}
        errorCause="Please fill it"
      />
    </div>
  )
}

export default App
