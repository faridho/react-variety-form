import React from 'react'
import PropTypes from 'prop-types'

const Progress = (props) => {
  return (
    <p className='text-sm float-right text-gray-rof-300'>
      {props.progress}/{props.total}
    </p>
  )
}

Progress.defaultProps = {
  progress: 0,
  total: 0
}

Progress.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number
}

export default Progress
