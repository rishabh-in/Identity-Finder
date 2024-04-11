'use client'

import React from 'react'
const Result = ({userData}) => {
  
  return (
    <div className='flex border-2 border-black h-[30rem] w-[22rem] rounded-md shadow-xl'>
      <div>
        <h3>Name: {userData?.name}</h3>
        <h3>age: {userData?.age}</h3>
        <h3>Gender: {userData?.gender}</h3>
      </div>
    </div>
  )
}

export default Result