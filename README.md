# React Variety Form

Sometimes in our work, we are forced to go extra fast to finish our project because of any urgent request for a demo to show a new form or to create a simple form. Anyway, we can use any framework to handle it. But, you need extra time to install and set up. React Variety Form provides a simple form that can help you to give a style choice, validation, and responsiveness without any configs.

[![NPM](https://img.shields.io/npm/v/react-variety-form.svg)](https://www.npmjs.com/package/react-variety-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-variety-form
```

## Example Usage

```jsx
import React from 'react'
import {
  TextBox,
  TextArea,
  Select,
  SelectSearch,
  Radios,
  CheckBox
} from 'react-variety-form'

const Example = () => {
  function handleChange(value) {
    // your logic
  }

  render() {
    return (
       <TextBox onChange={handleChange} />
       <TextArea isRounded />
       <Select isDisable />
       <SelectSearch  />
       <Radios options={['Male', 'Female']} />
       <CheckBox />
    )
  }
}

export default Example
```

## Common Props

Common Props are properties than can use for all columns.

| Props              |   Typpe    | Default                        | Description                                                                                           |
| ------------------ | :--------: | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `isRounded`        | `boolean`  | `false`                        | rounded style bordered. default is flat                                                               |
| `isError`          | `boolean`  | `false`                        | custom error based on your logic                                                                      |
| `errorCause`       | `booleann` | `Please enter data correctly!` | custom error message when you give an error based on your logic                                       |
| `isRequired`       | `boolean`  | `false`                        | tag for the label which is the column that is mandatory. If true there is asterisk tag with red color |
| `mandatoryMessage` |  `string`  | `Field is required!`           | custom error mandatory. not applicable for `SelectSearch`, `CheckBox` and `Radios`                    |
| `isDisable`        | `boolean`  | `false`                        | prevent change value                                                                                  |
| `onChange`         | `function` |                                | set value for your current state                                                                      |

### Text Box

Text Box is the most used input form. Then format and validation are necessary to prevent wrong inputted.

| Props               |   Typpe   | Default                  | Description                                                         |
| ------------------- | :-------: | ------------------------ | ------------------------------------------------------------------- |
| `label`             | `string ` | `Full Name`              | the label is can custom based on your business                      |
| `value`             | `string`  | `empty string`           | set default state                                                   |
| `placeholder`       | `string`  | `Type here`              | give a hint to the user to know what will they type                 |
| `maxLength`         | `number`  | `255`                    | limit text inputted                                                 |
| `isNumberOnly`      | `boolean` | `false`                  | prevent input characters besides number type or only number allowed |
| `isEmail`           | `boolean` | `false`                  | allow email format only                                             |
| `emailErrorMessage` | `string`  | `Format email is wrong!` | show error email when input and format dont match                   |
| `progress`          | `boolean` | `false`                  | show progress length of characters typed                            |

### Text Area

Basically almost the same as Text Box. But, there are several added properties that can be used to complete features. Props `isNumberOnly` and `isEmail` are not applicable on it.

| Props   |  Typpe   | Default   | Description                                                                                 |
| ------- | :------: | --------- | ------------------------------------------------------------------------------------------- |
| `label` | `string` | `Address` | why `address`? bacause text area provide a wide space. but, easy to custom as like you want |
| `rows`  | `number` | `5`       | create widely area with a given number                                                      |

### Select

Select gives a choice option based on data. You only give an `array object` data and define value and name.

| Props       |  Typpe   | Default             | Description                                                                |
| ----------- | :------: | ------------------- | -------------------------------------------------------------------------- |
| `label`     | `string` | `Category`          | you can custom as like you want                                            |
| `data`      | `array`  | `[]`                | give an `array` and must object                                            |
| `name`      | `string` | `empty string`      | key from the element of property data which will be used to show on option |
| `value`     | `string` | `empty string`      | key from the element of property data which will be set as state           |
| `selected`  | `string` | `empty string`      | a value of state                                                           |
| `direction` | `string` | `Select a category` | a first option to direct to user                                           |

Mention property `array`, `name` and `value`. Below given an example how to implemment it.

```jsx
const Example = () => {
  const data = [
    {
        id: 178,
        fruitName: 'Apple'
    },
    {
        id: 179,
        fruitName: 'Pear'
    }
  ]
  render() {
    return (
       <Select data={data} name="fruitName" value="id" />
    )
  }
}
```

### Select Search

It was used to search bulky lists by type of characters. For several props same with select props. But, for props `value` will be instead of `selected`. Please adjust as needed for props `placeholder` and `label`.

### Radio Button

You can determine how many options that show on form with `array`.

| Props      |   Typpe   | Default       | Description                                                   |
| ---------- | :-------: | ------------- | ------------------------------------------------------------- |
| `label`    | `string`  | `Gender`      | this is can custom by own                                     |
| `options`  |  `array`  | `[]`          | determie options                                              |
| `name`     | `string`  | `option-name` | name of option                                                |
| `isColumn` | `boolean` | `false`       | is `true` mean are options order by column, vice-versa is row |

### Check Box

Check Box return boolean `true` or `false`

| Props       |  Typpe   | Default                                         | Description                          |
| ----------- | :------: | ----------------------------------------------- | ------------------------------------ |
| `label`     | `string` | `Agree`                                         | somtimes checkbox used for agreement |
| `statement` | `string` | `I am agree with the statements and conditions` | the statement value                  |

## Conclusion

React Variety Form give easy design and use to handle common to prevent wrong process.

## License

MIT © [faridho](https://github.com/faridho)
