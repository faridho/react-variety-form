import React from 'react'
import PropTypes from 'prop-types'

export const CheckboxComponent = (props) => {
  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className='relative'>
      <div className='flex font-bold pb-3'>
        {props.label}
        {required}
      </div>
      <div className='flex'>
        <input
          type='checkbox'
          onChange={handleChange}
          disabled={props.isDisabled}
          className={`w-5 h-5 text-blue-600 bg-gray-rof-100 ${
            props.isDisabled && 'cursor-not-allowed'
          } rounded border-gray-rof-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
        />
        <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {props.term}
        </label>
      </div>
    </div>
  )
}

CheckboxComponent.defaultProps = {
  label: 'Agree',
  isRequired: false,
  term: 'I am agree with the terms and conditions',
  isDisabled: false,
  onChange: () => {}
}

CheckboxComponent.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  term: PropTypes.string,
  isDisabled: PropTypes.bool
}
