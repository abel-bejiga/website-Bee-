import React from 'react'
import { item } from '../data/imports'

const About = () => {
  return (
        <>
            <div className='h-screen relative '>
                <div className='xl:w-[400px] w-60 m-auto'>
                    <img src={item.se_at} className='w-full opacity-[40%] m-auto' alt="ico" />
                </div>
                <div className='absolute bottom-40 left-1/4 -translate-x-1/2 w-[45%]'>
                    <h1 className='fo_t 2xl:text-7xl xl:text-5xl sm:text-5xl text-2xl w-full text-center uppercase'>A beauty that is truly captivating, radiating grace and elegance with every glance.</h1>
                </div>
                    <div className=' absolute xl:top-20 top-7 xl:right-0 -right-40 z-[1] overflow-hidden' style={{height: 'calc(100% - 5rem)'}}>
                <img src={item.b_sec} alt="img" className='object-cover object-center'/>
                    </div>
      
            </div>

        </>
    )
}

export default About