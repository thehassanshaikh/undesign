import React, { useEffect, useState } from 'react'
import Backicon from '../assets/back-arrow.png'
import Logo from '../assets/logo.png'
import { useNavigate, Link, useLocation} from "react-router-dom";


function Navbar() {
    let navigate  = useNavigate();
    const Location = useLocation();
    const [home,setHome] = useState(false);
  return (
    <nav className='py-4 px-8 border-b '>
        <div className='flex justify-between items-center'>
            {home ? <h3 className='text-2xl	font-bold text-purple-500'>Over Stack</h3> : <img className='h-8 w-auto sm:h-12' src={Backicon} alt="" onClick={() => navigate(-1)}/>}
           
            <img className="h-10 w-auto sm:h-14" src={Logo} alt="logo" />
            <button className='bg-purple-500 w-auto h-auto text-white rounded-md p-2 text-sm font-medium' ><Link to={'/page'}> Submit Resources</Link></button>
        </div>
    </nav>
  )
}

export default Navbar
