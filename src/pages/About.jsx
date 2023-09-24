import React from 'react'
import { item } from '../data/imports'

const About = () => {
  return (
        <>
            <div className='h-screen relative '>
                <div>
                    <img src={item.se_at} className=' opacity-[40%] m-auto' alt="ico" />
                </div>
                <div className='absolute bottom-40 left-1/4 -translate-x-1/2 w-[45%]'>
                    <h1 className='fo_t text-8xl w-full text-center uppercase'>A beauty that is truly captivating, radiating grace and elegance with every glance.</h1>
                </div>
                    <div className=' absolute top-20 right-0 z-[1] overflow-hidden' style={{height: 'calc(100% - 5rem)'}}>
                <img src={item.b_sec} alt="img" className='object-cover object-center'/>
                    </div>
                    <img src={item.te_let_h} alt="ico" className='object-cover object-center w-4/5 absolute bottom-0'/>
            </div>

        </>
    )
}

export default About