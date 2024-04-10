import React from 'react'
import Form from './Form'
import Result from './Result'

const Body = () => {

  // make api call through react query

  
  
  return (
    <div className='flex w-full h-[calc(100vh-120px)] bg-[#f1f2f6]'>
      <div className='flex justify-center items-center w-1/2 h-full border-2'>
        <Form />
      </div>
      <div  className='flex justify-center items-center w-1/2 h-full border-2'>
        <Result />
      </div>
    </div>
  )
}

export default Body