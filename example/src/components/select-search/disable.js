import React from 'react'
import { SelectSearch } from 'react-variety-form'
import UseFormInput from '../use-form-input'

const Disabale = () => {
  const country = UseFormInput('')
  const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' }
  ]
  return (
    <div>
      <div className=' text-gray-black-100 text-sm'>
        <div className='font-bold'>Basic</div>
        <p>
          Select basic is tewxt box without any custom like validation or style
          rounded. Basic is flat.
        </p>
      </div>
      <div className='border border-gray-rof-200 rounded-t-md p-5 mt-5'>
        <SelectSearch
          data={countries}
          direction="Select Country"
          isRounded
          isRequired
          
          name='name'
          value='code'
          onChange={country.onChange}
        />
      </div>
      <div className='border border-t-0 border-gray-rof-200 bg-gray-rof-400 rounded-b-md p-5'>
        <pre>
          {JSON.stringify(
            {
                country: country.value
            },
            null,
            4
          )}
        </pre>
      </div>
    </div>
  )
}

export default Disabale
