import Link from 'next/link'
import React from 'react'

const SecondaryHeading = ({title, path}) => {
  return (
    <div className="border-b border-primary-300 pb-2 flex justify-between items-center">
    <h1 className='font-Poppins-Semibold text-xl text-grya-800'>{title}</h1>
    <Link href={path} className="font-Poppins-Medium hover:text-primary-600">See more</Link>
  </div>
  )
}

export default SecondaryHeading
