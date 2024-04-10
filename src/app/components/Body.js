import React from 'react'

const Body = () => {
  return (
    <div className='flex w-full h-[calc(100vh-120px)] bg-[#ffb8b8]'>
      <div className='flex justify-center items-center w-1/2 h-full border-2'>
        <div className='flex flex-col p-5 h-48 w-96 rounded-xl bg-white shadow-2xl justify-center items-center'>
          <input className='outline-none h-12 text-xl border-2 rounded-lg font-mono' type='text' placeholder='Enter Name'/>
          <button className='h-11 w-56 text-xl bg-blue-500 text-white font-mono mt-6 rounded-md hover:bg-opacity-80 transition-all ease-in-out duration-100'>Submit</button>
        </div>
      </div>
      <div  className='w-1/2 h-full border-2'>
        result
      </div>
    </div>
  )
}

export default Body