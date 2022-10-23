import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const TextBoxComponent = (props) => {
  const [value, setValue] = useState('')
  const [mandatory, setMandatory] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const onChange = (e) => {
    const newValue = e.target.value
    if (props.isRequired && newValue.length <= 0) {
      setMandatory(true)
      setErrorEmail(false)
      setValue(newValue)
      props.onChange(newValue)
    } else if (props.isEmail && newValue.length > 0) {
      const isError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)
      isError ? setErrorEmail(true) : setErrorEmail(false)

      setValue(newValue)
      setMandatory(false)
      props.onChange(newValue)
    } else if (props.isNumberOnly) {
      setValue(newValue.replace(/[^0-9.]+/g, ''))
      props.onChange(newValue.replace(/[^0-9.]+/g, ''))
    } else {
      setValue(newValue)
      props.onChange(newValue)
    }
  }

  let error
  if (props.isError) {
    error = (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.errorCause}
      </p>
    )
  }

  let mandatoryError
  if (mandatory) {
    mandatoryError = (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.mandatoryMessage}
      </p>
    )
  }

  let errorEmailMessage
  if (errorEmail) {
    errorEmailMessage = (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.emailErrorMessage}
      </p>
    )
  }

  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }

  let countDown
  if (props.countDown) {
    countDown = (
      <p className='text-sm float-right text-gray-rof-300'>
        {value.length}/{props.maxLength}
      </p>
    )
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
          props.isError || mandatory || errorEmail
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
        {error}
        {mandatoryError}
        {errorEmailMessage}
        {countDown}
      </div>
    </div>
  )
}

TextBoxComponent.defaultProps = {
  type: 'text',
  placeholder: 'Type here',
  maxLength: 1000,
  isNumberOnly: false,
  isEmail: false,
  emailErrorMessage: 'Format email is wrong!',
  isError: false,
  errorCause: 'Please enter data correctly',
  mandatoryMessage: 'Field is required!',
  label: 'Full Name',
  value: '',
  isRequired: false,
  countDown: false,
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
  mandatoryMessage: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  countDown: PropTypes.bool,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool
}
