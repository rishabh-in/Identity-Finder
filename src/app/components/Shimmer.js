import React from 'react'

const Shimmer = () => {
  return (
    <div className="className='flex border-2 border-black h-[30rem] w-[22rem] rounded-md shadow-xl">
      <div className="shimmer-container">
        <div className="shimmer-card bg-[linear-gradient(90deg, transparent, #dfe6e9, transparent)] animate-shimmer">Loading</div>
      </div>
    </div>
  )
}

export default Shimmer