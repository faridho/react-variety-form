import { useState } from 'react'

export const UseFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (value) => {
    setValue(value)
  }

  return {
    value,
    onChange: handleChange
  }
}

export default UseFormInput
