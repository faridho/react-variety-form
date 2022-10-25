import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ArrowDown } from './const/index'
import useForm from './utils/use-form'
import Error from './renders/error'
import Required from './renders/required'

export const SelectComponent = (props) => {
  const select = useForm(props.selected, false, false)
  const value = select.value
  const setValue = select.setValue
  const isMandatory = select.mandatory
  const setIsMandatory = select.setMandatory

  const changeValue = (e) => {
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
 
  useEffect(() => {
    props.onChange(value)
  })

  let required
  if (props.isRequired) {
    required = <Required />
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
        className={`border ${props.isError || isMandatory ? 'border-red-rof-100' : 'border-gray-rof-200'} w-full ${
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
        <Error isError={props.isError} errorCause={props.errorCause} />
        <Error isError={isMandatory} errorCause={props.mandatoryMessage} />
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
