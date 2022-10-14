import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TextBoxComp = (props) => {
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
        <p className='text-sm pl-1 text-red-rof-100'>{props.errorCause}</p>
    )
  }

  let required 
  if(props.isRequired) {
      required = (
        <span className='pl-1 text-red-rof-100'>*</span>
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
        <input
          type={props.type}
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          className='w-full focus:outline-none truncate align-middle p-1'
        />
      </div>
      {error}
    </div>
  )
}

TextBoxComp.defaultProps = {
  type: 'text',
  placeholder: 'Type here',
  maxLength: 1000,
  isNumberOnly: false,
  isError: false,
  errorCause: 'Error on type',
  label: "",
  isRequired: false
}

TextBoxComp.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  isNumberOnly: PropTypes.bool,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool
}
