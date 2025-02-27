import React from 'react'

const NumberField = ({props, placeholder}) => {
  return (
    <input
    type="number"
    {...props}
    placeholder={placeholder}
    className="w-full bg-gray-100 p-2 font-Poppins rounded-md focus:outline-double outline-primary-500"
  />
  )
}

export default NumberField
