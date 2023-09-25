import React from 'react'
import { item } from '../data/imports'
import HeaderHor from '../components/HeaderHor'

const Contact = () => {
  return (
    <>
        <div className='h-screen w-full'>
            <div className='w-full h-1/2'>
                <img src={item.b_cont} alt='img' className=' mix-blend-multiply w-full h-full object-cover object-center' />
            </div>
            <div className='w-fit h-fit m-auto whitespace-nowrap bottom-10'>
                <h1 className='text-[10vw] whitespace-nowrap fo_t text-center'>Contact Page</h1>
                <div className='relative bottom-8 left-7'>
                  <HeaderHor />
              </div> 
            </div>
        </div>
    </>
  )
}

export default Contact