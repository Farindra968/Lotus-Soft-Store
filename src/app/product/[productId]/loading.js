import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <p className='w-16 h-16 rounded-full animate-spin border-[10px]  border-b-primary-500 border-r-primary-400 border-t-primary-300 border-l-primary-200'></p>
    </div>
  )
}

export default loading
