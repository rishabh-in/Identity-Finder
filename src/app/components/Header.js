import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex p-4 w-full h-20 bg-cyan-100 shadow-lg items-center'>
      <Link href="/">
        <h1 className='font-bold text-3xl ml-3 font-mono'>IdentityFinder Pro</h1>
      </Link>
    </div>
  )
}

export default Header