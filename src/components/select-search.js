import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from './icons'

export const SelectSearchComponent = (props) => {
  const [display, setDisplay] = useState({
    name: props.direction,
    value: ''
  })

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
    if (!props.isDisabled) {
      setDropDown(!dropDown)
    }
  }

  const [searchValue, setSearch] = useState('')
  const [options, setOptions] = useState([])
  const onSearch = (e) => {
    setSearch(e.target.value)
    if (searchValue.length > 0) {
      const optionsFiltered = props.data.filter((item) =>
        item[props.name].toLowerCase().includes(e.target.value.toLowerCase())
      )
      setOptions(optionsFiltered)
    }
  }

  let error
  if (props.isError) {
    error = <p className='text-sm ml-2 text-red-rof-100'>{props.errorCause}</p>
  }

  let required
  if (props.isRequired) {
    required = <span className='pl-1 text-red-rof-100'>*</span>
  }

  const setSelected = (name, value) => {
    props.onChange({
      [props.name]: name,
      [props.value]: value
    })
  }

  let listOptions = props.data.map((item, index) => (
    <li
      key={index}
      className='max-w-full cursor-pointer text-sm hover:bg-gray-rof-100 p-2'
      onClick={() => {
        setDisplay({
          name: item[props.name],
          value: item[props.value]
        })
        setDropDown(false)
        setSelected(item[props.name], item[props.value])
      }}
    >
      {item[props.name]}
    </li>
  ))
  if (searchValue.length > 0) {
    if (options.length > 0) {
      listOptions = options.map((item, index) => (
        <li
          key={index}
          className='max-w-full cursor-pointer text-sm hover:bg-gray-rof-100 p-2'
          onClick={() => {
            setDisplay({
              name: item[props.name],
              value: item[props.value]
            })
            setDropDown(false)
            setSelected(item[props.name], item[props.value])
          }}
        >
          {item[props.name]}
        </li>
      ))
    } else {
      listOptions = <li className='max-w-full text-sm p-2'>Not found</li>
    }
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
        <ul className='overflow-y-auto frame  h-40'>{listOptions}</ul>
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
        className={`w-full flex cursor-pointer justify-between border border-solid border-gray-rof-200 ${
          props.isDisabled && 'bg-gray-rof-100 cursor-not-allowed'
        } p-1 ${props.isRounded && 'rounded-md'} ${
          dropDown && 'rounded-b-none'
        } `}
      >
        <p className='p-1'>{display.name}</p>
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
  isRounded: false,
  data: [],
  name: '',
  value: '',
  isDisabled: false,
  direction: 'Search a category',
  onChange: () => {}
}

SelectSearchComponent.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  errorCause: PropTypes.string,
  isRounded: PropTypes.bool,
  data: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  direction: PropTypes.string,
  isDisabled: PropTypes.bool
}
