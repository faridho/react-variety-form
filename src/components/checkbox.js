import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Required from './renders/required'

export const CheckboxComponent = (props) => {
  const [status, setStatus] = useState(false)
  let required
  if (props.isRequired) {
    required = <Required />
  }

  const handleChange = (e) => {
    setStatus(!status)
    props.onChange(!status)
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
          checked={status}
          disabled={props.isDisabled}
          className={`w-5 h-5 text-blue-600 bg-gray-rof-100 ${
            props.isDisabled && 'cursor-not-allowed'
          } rounded border-gray-rof-200 focus:ring-blue-500 focus:ring-2`}
        />
        <label className='ml-2 text-sm font-medium text-gray-900'>
          {props.statement}
        </label>
      </div>
    </div>
  )
}

CheckboxComponent.defaultProps = {
  label: 'Agree',
  isRequired: false,
  statement: 'I am agree with the statements and conditions',
  isDisabled: false,
  onChange: () => {}
}

CheckboxComponent.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  statement: PropTypes.string,
  isDisabled: PropTypes.bool
}
