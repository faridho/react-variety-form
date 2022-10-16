import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from './icons'

export const SelectSearchComponent = (props) => {
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  const [iconName, setIconName] = useState('arrow-down')
  useEffect(() => {
    setIconName(dropDown ? 'arrow-up' : 'arrow-down')
  })

  const [dropDown, setDropDown] = useState(false)
  const changeDropdDown = () => {
    setDropDown(!dropDown)
  }

  const [searchValue, setSearch] = useState('')
  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  let error
  if (props.isError) {
    error = <p className='text-sm ml-2 text-red-rof-100'>{props.errorCause}</p>
  }

  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }

  let list
  if (dropDown) {
    list = (
      <div
        className={`rounded-t-none ${
          props.isRounded && 'rounded-md'
        } border border-t-0 border-gray-rof-200 absolute bg-white-rof-100 w-full`}
      >
        <div
          className={`m-2 border border-solid ${
            props.isError ? 'border-red-rof-100' : 'border-gray-rof-200'
          } py-1 pl-1 ${props.isRounded && ' rounded-md'}`}
        >
          <input
            type='text'
            value={searchValue}
            onChange={onSearch}
            placeholder={props.placeholder}
            className={`w-full focus:outline-none text-sm`}
          />
        </div>
        {error}
        <ul className='overflow-y-auto frame  h-40'>
          <li className='max-w-full cursor-pointer text-sm hover:bg-gray-rof-100 p-2'>
            Tinky Winky
          </li>
        </ul>
      </div>
    )
  }
  return (
    <div className='relative' ref={ref}>
      <div className='flex font-bold pb-1'>
        {props.label}
        {required}
      </div>
      <div
        onClick={changeDropdDown}
        className={`w-full flex cursor-pointer justify-between border border-solid border-gray-rof-200 p-1 ${
          props.isRounded && 'rounded-md'
        } ${dropDown && 'rounded-b-none'} `}
      >
        <p className='p-1'>Search a category</p>
        <div className='pt-1.5 pl-2'>
          <Icon name={iconName} />
        </div>
      </div>
      {list}
    </div>
  )
}

SelectSearchComponent.defaultProps = {
  label: 'Search',
  placeholder: 'Search here',
  isRequired: false,
  isError: false,
  errorCause: 'Error select',
  isRounded: false
}

SelectSearchComponent.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRounded: PropTypes.bool
}