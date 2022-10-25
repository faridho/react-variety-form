import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useForm from './utils/use-form'
import Error from './renders/error'
import Required from './renders/required'
import CountDown from './renders/countdown'

export const TextAreaComponent = (props) => {
  const textArea = useForm('', false, false)
  const value = textArea.value
  const setValue = textArea.setValue
  const isMandatory = textArea.mandatory
  const setIsMandatory = textArea.setMandatory

  const onChange = (e) => {
    const newValue = e.target.value
    if (props.isRequired && newValue.length <= 0) {
      setIsMandatory(true)
      setValue(newValue)
      props.onChange(newValue)
    } else {
      setIsMandatory(false)
      setValue(newValue)
      props.onChange(newValue)
    }
  }

  let required
  if (props.isRequired) {
    required = <Required />
  }

  let countDown
  if (props.countDown) {
    countDown = <CountDown collect={value.length} total={props.maxLength} />
  }

  return (
    <div>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <div
        className={`w-full border border-solid ${
          props.isDisabled && 'bg-gray-rof-100'
        } ${props.isError || isMandatory ? 'border-red-rof-100' : 'border-gray-rof-200'} p-1 ${
          props.isRounded && 'rounded-md'
        }`}
      >
        <textarea
          type='textarea'
          value={props.value || value}
          onChange={onChange}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          rows={props.rows}
          cols={100}
          className={`w-full focus:outline-none p-1 ${
            props.isDisabled && 'bg-gray-rof-100 cursor-not-allowed'
          }`}
          disabled={props.isDisabled}
        />
      </div>
      <div className='text-center mt-1'>
        <Error isError={props.isError} errorCause={props.errorCause} />
        <Error isError={isMandatory} errorCause={props.mandatoryMessage} />
        {countDown}
      </div>
    </div>
  )
}

TextAreaComponent.defaultProps = {
  placeholder: 'Type here',
  maxLength: 1000,
  isError: false,
  errorCause: 'Please enter the data correctly',
  label: 'Address',
  value: '',
  isRequired: false,
  mandatoryMessage: 'Field is required!',
  countDown: false,
  rows: 5,
  isRounded: false,
  isDisabled: false,
  onChange: () => {}
}

TextAreaComponent.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  mandatoryMessage: PropTypes.string,
  countDown: PropTypes.bool,
  rows: PropTypes.number,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool
}
