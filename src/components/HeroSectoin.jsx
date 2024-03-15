import React from 'react'
import './HeroSection.css'

function HeroSectoin() {

 
    return (
        <section className='h-48 flex justify-center items-center'>
            <div className="text-2xl sm:text-4xl md:text-5xl w-4/5 md:3/5 font-extrabold text-center ">
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text ">
                Unifying Creativity, Connecting Communities.
                </span>
            </div>
        </section>

    )
}

export default HeroSectoin
