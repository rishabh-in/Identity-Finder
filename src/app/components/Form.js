'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toast'

const Form = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const router = useRouter()
  const handleInputChange = e => setName(e.target.value);

  return (
    <div className='flex flex-col p-5 h-48 w-96 rounded-xl bg-white shadow-2xl justify-center items-center'>
      <input onChange={(e) => handleInputChange(e)} value={name} className='outline-none h-12 text-xl border-2 rounded-lg font-mono' type='text' placeholder='Enter Name'/>
      <button onClick={() => handleSubmit(name)} className='h-11 w-56 text-xl bg-blue-500 text-white font-mono mt-6 rounded-md hover:bg-opacity-80 transition-all ease-in-out duration-100'>Submit</button>
    </div>
  )
}

export default Form