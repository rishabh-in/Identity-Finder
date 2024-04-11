'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const LayoutHOC = ({children}) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default LayoutHOC