import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ArrowDown } from '../utils'

export const SelectComponent = (props) => {
  const [value, setValue] = useState("")
  const changeValue = (e) => {
    setValue(e.target.value)
  }
  let error
  if (props.isError) {
    error = (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.errorCause}
      </p>
    )
  }

  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }
  return (
    <div>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <select
        className={`border border-gray-rof-200 w-full ${props.isDisabled && 'bg-gray-rof-100 cursor-not-allowed'} ${props.isRounded && 'rounded-md'} p-2`}
        style={Arrow}
        disabled={props.isDisabled}
        onChange={changeValue}
      >
        <option value=''>Select Gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
      <div className='text-center mt-1'>{error}</div>
    </div>
  )
}

SelectComponent.defaultProps = {
  label: 'Gender',
  isError: false,
  errorCause: 'Please select the data correctly',
  isRequired: false,
  isRounded: false,
  isDisabled: false
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRequired: PropTypes.bool,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool
}

const Arrow = {
  appearance: 'none',
  backgroundImage: `url(${ArrowDown})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.7rem top 50%',
  backgroundSize: '0.65rem auto',
}
