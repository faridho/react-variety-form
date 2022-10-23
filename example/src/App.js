import React from 'react'
import TextBoxComponent from './components/text-box/index'
import TextAreaComponent from './components/text-area'
import SelectComponent from './components/select/index'
import SelectSearchComponent from './components/select-search/index.js'
import RadioComponent from './components/radio'
import CheckboxComponent from './components/checkbox'
import 'react-variety-form/dist/index.css'

const App = () => {
  return (
    <div className='pt-10 sm:px-1 md:px-10 lg:px-64 xl:px-96'>
      <div className='w-12/12 px-2'>
        <div className='p-4 mb-5 w-full text-center bg-white rounded-lg border border-gray-rof-200'>
          <h5 className='mb-2 text-3xl font-bold text-gray-900'>
            React Variety Form
          </h5>
          <p className='mb-5 text-base text-gray-500'>
            Make a simple form for you need fast or you on injury time
            conditions
          </p>
        </div>
      </div>
      <TextBoxComponent />
      <TextAreaComponent />
      <SelectComponent />
      <SelectSearchComponent />
      <RadioComponent />
      <CheckboxComponent />
    </div>
  )
}

export default App
