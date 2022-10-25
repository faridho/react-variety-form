import { useState } from 'react'

const useForm = (
    initialValue, 
    initalMandatory,
    initialErrorEmail
) => {
  const [value, setValue] = useState(initialValue)
  const onSetValue = (newValue) => {
    setValue(newValue)
  }

  const [mandatory, setMandatory] = useState(initalMandatory)
  const onSetMandatory = (status) => {
    setMandatory(status)
  }

  const [errorEmail, setErrorEmail] = useState(initialErrorEmail)
  const onSetErrorEmail = (status) => {
    setErrorEmail(status)
  }


  return {
    value,
    setValue: onSetValue,
    mandatory,
    setMandatory: onSetMandatory,
    errorEmail,
    setErrorEmail: onSetErrorEmail
  }
}

export default useForm