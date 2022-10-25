import React from 'react'
import PropTypes from 'prop-types'

const Error = (props) => {
  if (props.isError) {
    return (
      <p className='text-sm pl-1 text-red-rof-100 float-left'>
        {props.errorCause}
      </p>
    )
  } else {
    return <div></div>
  }
}

Error.defaultProps = {
  isError: false,
  errorCause: ''
}

Error.propTypes = {
  isError: PropTypes.bool,
  errorCause: PropTypes.string
}

export default Error
