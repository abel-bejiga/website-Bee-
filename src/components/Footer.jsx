import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='h-screen w-full max-sm:hidden' id='footer'>
      <div className='gradient_foot w-full h-full grid'>
        <div className='w-1/2 h-3/4 max-sm:py-3 m-auto grid place-content-center text-center'>
           <div className=' flex gap-2 grad_powered-by h-10 w-fit px-4 shadow-sm shadow-black/50 rounded-lg justify-center items-center'>
            <p>Powered By</p> 
            <Link to={'https://www.hevelstudios.com'} target='_black' className='uppercase shadow-sm shadow-black/50 px-2 rounded cursor-pointer hover:scale-105 hover_grad sm_ooth hover:text-neutral-700'>Hevel Studios</Link>
           </div>
            <p className='pt-2'>Made with 🤎</p>
        </div>


      </div>
    </div>
    </>
  )
}

export default Footer