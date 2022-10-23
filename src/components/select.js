import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ArrowDown } from '../utils'

export const SelectComponent = (props) => {
  const [value, setValue] = useState(props.selected)
  const [mandatory, setMandatory] = useState(false)
  const changeValue = (e) => {
    const newValue = e.target.value
  
    if (props.isRequired && newValue.length <= 0) {
      setMandatory(true)
      setValue(newValue)
      props.onChange(newValue)
    } else {
      setMandatory(false)
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

  useEffect(() => {
    props.onChange(value)
  })

  let mandatoryError
  if (mandatory) {
    mandatoryError = (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.mandatoryMessage}
      </p>
    )
  }

  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }

  const options = props.data.map((item, index) => (
    <option key={index} value={item[props.value]} name={item[props.name]}>{item[props.name]}</option>
  ))

  return (
    <div>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <select
        className={`border ${props.isError || mandatory ? 'border-red-rof-100' : 'border-gray-rof-200'} w-full ${
          props.isDisabled && 'bg-gray-rof-100 cursor-not-allowed'
        } ${props.isRounded && 'rounded-md'} p-2`}
        style={Arrow}
        disabled={props.isDisabled}
        onChange={changeValue}
        value={value}
      >
        <option value=''>{props.direction}</option>
        {options}
      </select>
      <div className='text-center mt-1'>
        {error}
        {mandatoryError}
      </div>
    </div>
  )
}

SelectComponent.defaultProps = {
  label: 'Gender',
  isError: false,
  errorCause: 'Please select the data correctly',
  isRequired: false,
  isRounded: false,
  isDisabled: false,
  data: [],
  name: '',
  value: '',
  direction: 'Select Gender',
  mandatoryMessage: 'Field is required!',
  selected: '',
  onChange: () => {}
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRequired: PropTypes.bool,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool,
  data: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  direction: PropTypes.string,
  selected: PropTypes.string, 
  mandatoryMessage: PropTypes.string
}

const Arrow = {
  appearance: 'none',
  backgroundImage: `url(${ArrowDown})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.7rem top 50%',
  backgroundSize: '0.65rem auto'
}
