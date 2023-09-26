import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='sm:h-[200px] h-fit w-full'>
      <div className='gradient_foot '>
        <div className='w-1/2 h-3/4 max-sm:py-3 m-auto grid place-content-center text-center'>
           <div className='grid grad_powered-by h-20 w-fit px-4 shadow-sm shadow-black rounded-lg justify-center items-center'>
            <p>Powered By</p> 
            <Link to={'https://www.hevelstudios.com'} target='_black' className='uppercase shadow-sm shadow-black px-2 rounded cursor-pointer hover:scale-105 hover_grad sm_ooth hover:text-neutral-700'>Hevel Studios</Link>
           </div>
            <p >Made with 🤎</p>
        </div>


      </div>
    </div>
    </>
  )
}

export default Footer