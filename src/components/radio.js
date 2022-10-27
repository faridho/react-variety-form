import React from 'react'
import PropTypes from 'prop-types'
import Required from './renders/required'

export const RadioComponent = (props) => {
  let required
  if (props.isRequired) {
    required = <Required />
  }

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  const options = props.options.map((item, index) => (
    <div className='flex mr-3 mb-3' key={index}>
      <input
        type='radio'
        name={props.name}
        value={item}
        onChange={handleChange}
        disabled={props.isDisabled}
        className={`w-5 h-5 text-blue-600 bg-gray-rof-100 ${
          props.isDisabled && 'cursor-not-allowed'
        } border-gray-rof-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
      />
      <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {item}
      </label>
    </div>
  ))
  return (
    <div className='relative'>
      <div className='flex font-bold pb-3'>
        {props.label}
        {required}
      </div>
      <div className={`flex ${props.isColumn ? 'flex-col' : 'flex-row'}`}>
        {options}
      </div>
    </div>
  )
}

RadioComponent.defaultProps = {
  label: 'Gender',
  isRequired: false,
  options: ['Male', 'Female'],
  name: 'select-name',
  isColumn: false,
  isDisabled: false,
  onChange: () => {}
}

RadioComponent.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.array,
  name: PropTypes.string,
  isColumn: PropTypes.bool,
  isDisabled: PropTypes.bool
}
