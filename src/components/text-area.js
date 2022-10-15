import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TextAreaComponent = (props) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    if (props.isNumberOnly) {
      setValue(e.target.value.replace(/[^0-9.]+/g, ''))
    } else {
      setValue(e.target.value)
    }
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
    <div className='p-1'>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <div
        className={`w-full border border-solid ${
          props.isError ? 'border-red-rof-100' : 'border-gray-rof-200'
        } p-1 rounded-md`}
      >
        <textarea
          type={props.type}
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          rows={props.rows}
          cols={100}
          className='w-full focus:outline-none p-1'
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
  type: 'textarea',
  placeholder: 'Type here',
  maxLength: 1000,
  isNumberOnly: false,
  isError: false,
  errorCause: 'Please enter the data correctly',
  label: "",
  isRequired: false,
  countDown: false,
  rows: 5
}

TextAreaComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  isNumberOnly: PropTypes.bool,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  countDown: PropTypes.bool,
  rows: PropTypes.number
}
