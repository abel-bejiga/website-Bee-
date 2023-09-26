import React from 'react'
import { item } from '../data/imports'

const About = () => {
  return (
        <>
            <div className='sm:h-screen sm:min-h-[700px] h-[60vh] max-sm:grid max-sm:place-content-center max-sm:gap-4 relative '>
                <div className='xl:w-[400px] w-60 m-auto'>
                    <img src={item.se_at} className='w-full opacity-[40%] m-auto object-cover object-center' alt="ico" />
                </div>
                <div className='sm:absolute bottom-40 sm:left-1/4 sm:-translate-x-1/2 sm:w-[45%]'>
                    <h1 className='fo_t 2xl:text-7xl xl:text-5xl sm:text-5xl text-2xl w-full text-center uppercase'>A beauty that is truly captivating, radiating grace and elegance with every glance.</h1>
                </div>
                    <div className='hidden sm:absolute xl:top-20 top-7 xl:right-0 -right-40 z-[1] overflow-hidden' style={{height: 'calc(100% - 5rem)'}}>
                        <img src={item.b_sec} alt="img" className='object-cover object-center'/>
                    </div>
      
            </div>

        </>
    )
}

export default About