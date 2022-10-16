import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TextAreaComponent = (props) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  let error
  if(props.isError) {
    error = (
        <p className='text-sm pl-1 text-red-rof-100 float-left'>{props.errorCause}</p>
    )
  }

  let required 
  if(props.isRequired) {
      required = (
        <span className='pl-1 text-red-rof-100'>*</span>
      )
  }

  let countDown
  if(props.countDown) {
    countDown = (
      <p className='text-sm float-right text-gray-rof-300'>{value.length}/{props.maxLength}</p>
    )
  }
  return (
    <div>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <div
        className={`w-full border border-solid ${props.isDisabled && 'bg-gray-rof-100'} ${
          props.isError ? 'border-red-rof-100' : 'border-gray-rof-200'
        } p-1 ${props.isRounded && 'rounded-md'}`}
      >
        <textarea
          type="textarea"
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          rows={props.rows}
          cols={100}
          className={`w-full focus:outline-none p-1 ${props.isDisabled && 'bg-gray-rof-100 cursor-not-allowed'}`}
          disabled={props.isDisabled}
        />
      </div>
      <div className='text-center mt-1'>
        {error}
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
  label: "Address",
  isRequired: false,
  countDown: false,
  rows: 5,
  isRounded: false,
  isDisabled: false
}

TextAreaComponent.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  countDown: PropTypes.bool,
  rows: PropTypes.number,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool
}
