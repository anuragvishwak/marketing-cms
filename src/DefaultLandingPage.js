import React from 'react'
import Navbar from './Navbar'

function DefaultLandingPage() {
  return (
    <div className=''>
         <div className="flex p-3 sm:p-0 items-center bg-[#2f4858] sm:bg-white justify-between sm:block">
        <p className="sm:hidden text-xl text-white font-bold">Dashboard</p>
        <Navbar />
      </div>
        <div>
            Default Dashboard Page
        </div>
    </div>
  )
}

export default DefaultLandingPage