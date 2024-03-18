import React from 'react'
import Header from './Header'
import HeroSection from './HeroSectoin'
import {useLocation} from 'react-router-dom'
import Navbar from './Navbar';

function Page() {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className='bg-slate-50 p-2 pt-1 md:p-28 md:pt-10' >
        <div className='h-100vh w-auto bg-white p-1 md:p-10'>
          {
            [...Array(10)].map((_, index) => (
              <div key={index} className='flex gap-5 border-b border-gray-200 py-3 hover:pl-4 ease-in-out	duration-300'>
                <div className='bg-gradient-to-r from-pink-500 to-violet-500 rounded h-full w-20 md:w-auto md:h-auto'>
                  <img className='md:p-5 p-2 w-full ' src="https://undesign.learn.uno/images/logos/undraw.png" alt="" />
                </div>
                <div className=' flex flex-col justify-center'>
                  <h3 className='font-semibold'>Undraw</h3>
                  <p className='font-light text-gray-600 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim optio error officia sequi.</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Page;
