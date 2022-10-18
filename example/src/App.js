import React from 'react'
import { SelectSearch } from 'react-variety-form'
import 'react-variety-form/dist/index.css'

const list = [
  {
    id: 100,
    value: 'Lala'
  },
  {
    id: 200,
    value: 'Po'
  }
]

const App = () => {
  return (
    <div className='mt-36 px-2'>
      <div className=' w-full flex flex-row'>
        <div className='w-6/12 p-1'>
          <SelectSearch isRounded value="id" name="value" data={list} />
        </div>
        <div className='w-6/12 p-1'>
          
        </div>
      </div>
      <div className='w-full flex flex-row'>
        <div className='w-6/12 p-1'>
          
        </div>
        <div className='w-6/12 p-1'>
          
        </div>
      </div>
    </div>
  )
}

export default App
