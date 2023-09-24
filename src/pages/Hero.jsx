import React from 'react'
import { item } from '../data/imports'

const Hero = () => {
  return (
    <>
        <div className='h-screen ' id='Home'>
            {/* <div className='h-[50vh] rotate-180 scale-x-[-1] -translate-y-' style={{background: `url(${item.b_0}) center/contain no-repeat`}}></div> */}
            {/*  sm:min-w-[500px] max-w-[650px] min-w-[700px] */}
           <div className='h-[70vh] min-h-[500px] max-h-[700px] w-auto absolute -top-10 left-1/2 -translate-x-1/2 sm:min-w-[500px] max-w-[650px] min-w-[700px]'>
           <img src={item.b_0} alt="img" className='scale-x-[-1] rotate-180 w-full h-full m-auto'/>
           </div>
            <div className='absolute bottom-10 m-auto grid place-content-center w-full leading-[150px] h-fit '>
            <h1 className='uppercase text-[11vw] text-center'>Bemnet Erbeto</h1>
            {/* <div className=''> */}
           <div className='w-[83vw] m-auto'>
           {/* <p className='capitalize text-center w-full xl:text-4xl text-2xl whitespace-nowrap fo_t'>Captivating the world, one look at a time</p> */}
            <img src={item.te_let_h} alt="ico" className='object-cover object-center rounded'/>
           </div>
            {/* </div> */}
            
            </div>
        </div>
    </>
  )
}

export default Hero