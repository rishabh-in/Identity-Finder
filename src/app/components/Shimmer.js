import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex h-[25rem] w-[22rem] shadow-xl rounded-xl">
      <div className="w-full h-full shimmer-card bg-gradient-to-r from-transparent via-[#c1e4f3] to-transparent animate-shimmer rounded-xl"></div>
    </div>
  )
}

export default Shimmer