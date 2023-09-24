import React from 'react'
import { item } from '../data/imports'

const Hero = () => {
  return (
    <>
        <div className='h-screen' id='Home'>
            {/* <div className='h-[50vh] rotate-180 scale-x-[-1] -translate-y-' style={{background: `url(${item.b_0}) center/contain no-repeat`}}></div> */}
            <img src={item.b_0} alt="img" className='scale-x-[-1] w-[33%] sm:min-w-[500px] min-w-[700px] h-auto rotate-180 m-auto'/>
            <div className='absoulte leading-[230px] w-fit m-auto pt-10'>
            <h1 className='uppercase text-[10vw] text-center'>Bemnet Erbeto</h1>
            <div className='flex justify-between items-center px-4'>
            <p className='capitalize text-start w-fit text-4xl fo_t'>Captivating the world, one look at a time</p>
            <img src={item.te_let_h} alt="ico" className='object-cover object-center w-2/3'/>
            </div>
            
            </div>
        </div>
    </>
  )
}

export default Hero