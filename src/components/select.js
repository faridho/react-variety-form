import React from 'react'
import PropTypes from 'prop-types'
import { ArrowDown } from '../utils'

export const SelectComponent = (props) => {
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
    <div className='p-1'>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>

      <select
        className={`border border-gray-rof-200 w-full rounded-md p-2`}
        style={Arrow}
      >
        <option>Select Gender</option>
        <option>Laki-Laki</option>
        <option>Perempuan</option>
      </select>
      <div className='text-center mt-1'>{error}</div>
    </div>
  )
}

SelectComponent.defaultProps = {
  label: 'Gender',
  isError: false,
  errorCause: 'Please select the data correctly',
  isRequired: false
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRequired: PropTypes.bool
}

const Arrow = {
  appearance: 'none',
  backgroundImage: `url(${ArrowDown})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.7rem top 50%',
  backgroundSize: '0.65rem auto'
}
