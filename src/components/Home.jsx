import React from 'react'
import Header from './Header';
import HeroSectoin from './HeroSectoin';
import Cards from './Cards';
import Navbar from './Navbar';
import NotFound from './NotFound';

function Home() {
    return (
        <>
            <Navbar />
            <HeroSectoin />
            <Cards />
            <NotFound />
        </>
    )
}

export default Home
