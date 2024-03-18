import React from 'react'
import Backicon from '../assets/back-arrow.png'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='py-4 px-8 border-b '>
        <div className='flex justify-between items-center'>
            <img className='h-8 w-auto sm:h-12' src={Backicon} alt="" />
            <img className="h-10 w-auto sm:h-14" src={Logo} alt="logo" />
            <button className='bg-purple-500 w-auto h-auto text-white rounded-md p-2 text-sm font-medium'>Submit Resources</button>
            {/* <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra small</button> */}
        </div>
    </nav>
  )
}

export default Navbar
