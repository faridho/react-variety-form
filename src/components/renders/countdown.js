import React from 'react'
import PropTypes from 'prop-types'

const CountDown = (props) => {
  return (
    <p className='text-sm float-right text-gray-rof-300'>
      {props.collect}/{props.total}
    </p>
  )
}

CountDown.defaultProps = {
  collect: 0,
  total: 0
}

CountDown.propTypes = {
  collect: PropTypes.number,
  total: PropTypes.number
}

export default CountDown
