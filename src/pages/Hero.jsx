import React from 'react'
import { item } from '../data/imports'

const Hero = () => {
  return (
    <>
        <div className='h-screen ' id='Home'>
            {/* <div className='h-[50vh] rotate-180 scale-x-[-1] -translate-y-' style={{background: `url(${item.b_0}) center/contain no-repeat`}}></div> */}
           <div className='h-70vh w-full absolute -top-10 left-1/2 -translate-x-1/2 sm:min-w-[500px] max-w-[650px] min-w-[700px] h-auto '>
           <img src={item.b_0} alt="img" className='scale-x-[-1] rotate-180 m-auto'/>
           </div>
            <div className='absolute bottom-10 m-auto grid place-content-center w-full leading-[230px] h-fit '>
            <h1 className='uppercase text-[11vw] text-center'>Bemnet Erbeto</h1>
            <div className='flex justify-between items-center px-4'>
           <div className='w-1/2'>
           <p className='capitalize text-center w-full xl:text-4xl text-2xl whitespace-nowrap fo_t'>Captivating the world, one look at a time</p>
           </div>
            <img src={item.te_let_h} alt="ico" className='object-cover object-center xl:w-1/2 w-1/3 h-14'/>
            </div>
            
            </div>
        </div>
    </>
  )
}

export default Hero