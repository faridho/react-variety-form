import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useForm from './utils/use-form'
import Error from './renders/error'
import Required from './renders/required'
import Progress from './renders/progress'

export const TextBoxComponent = (props) => {
  const textBox = useForm('', false, false)
  const value = textBox.value
  const setValue = textBox.setValue
  const isMandatory = textBox.mandatory
  const setIsMandatory = textBox.setMandatory
  const errorEmail = textBox.errorEmail
  const setErrorEmail = textBox.setErrorEmail
  
  const onChange = (e) => {
    const newValue = e.target.value
    const phoneValue = newValue.replace(/[^0-9.]+/g, '')

    if (props.isRequired && newValue.length <= 0) {
      setIsMandatory(true)
      setErrorEmail(false)
      setValue(newValue)

      props.onChange(newValue)
    } else if (props.isEmail && newValue.length > 0) {
      const isError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)
      isError ? setErrorEmail(true) : setErrorEmail(false)
      setIsMandatory(false)
      setValue(newValue)

      props.onChange(newValue)
    } else if (props.isNumberOnly) {
      setIsMandatory(false)
      setErrorEmail(false)
      setValue(phoneValue)

      props.onChange(phoneValue)
    } else {
      setIsMandatory(false)
      setErrorEmail(false)
      setValue(newValue)

      props.onChange(newValue)
    }
  }

  let required
  if (props.isRequired) {
    required = <Required />
  }

  let progress
  if (props.progress) {
    progress = <Progress progress={value.length} total={props.maxLength} />
  }

  return (
    <div>
      <div className='flex font-bold text-sm pb-1'>
        {props.label}
        {required}
      </div>
      <div
        className={`w-full border border-solid ${
          props.isDisabled && 'bg-gray-rof-100'
        } ${
          props.isError || isMandatory || errorEmail
            ? 'border-red-rof-100'
            : 'border-gray-rof-200'
        } p-1 ${props.isRounded && 'rounded-md'}`}
      >
        <input
          type={props.type}
          value={props.value || value}
          onChange={onChange}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          className={`w-full focus:outline-none truncate align-middle p-1 ${
            props.isDisabled && 'cursor-not-allowed bg-gray-rof-100'
          } `}
          disabled={props.isDisabled}
        />
      </div>
      <div className='text-center mt-1 pb-1'>
        <Error isError={props.isError} errorCause={props.errorCause} />
        <Error isError={isMandatory} errorCause={props.mandatoryMessage} />
        <Error isError={errorEmail} errorCause={props.emailErrorMessage} />
        {progress}
      </div>
    </div>
  )
}

TextBoxComponent.defaultProps = {
  type: 'text',
  placeholder: 'Type here',
  maxLength: 255,
  isNumberOnly: false,
  isEmail: false,
  emailErrorMessage: 'Format email is wrong!',
  isError: false,
  errorCause: 'Please enter data correctly!',
  isRequired: false,
  mandatoryMessage: 'Field is required!',
  label: 'Full Name',
  value: '',
  progress: false,
  isRounded: false,
  isDisabled: false,
  onChange: () => {}
}

TextBoxComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  isNumberOnly: PropTypes.bool,
  isEmail: PropTypes.bool,
  emailErrorMessage: PropTypes.string,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRequired: PropTypes.bool,
  mandatoryMessage: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  progress: PropTypes.bool,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool
}
