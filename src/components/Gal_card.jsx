import React from 'react'
import { im_lib } from '../data/imports'
import Header from './Header'
import {RiZoomOutLine, RiZoomInLine} from 'react-icons/ri'
import { loop_line_render } from '../pages/Hero'


const Gal_card = () => {
  const [big_gal, setBig_gal] = React.useState(true)
  
  const bg_bor_gal = (val) => {
      return(
          <div className={`absolute top-0 -z-10 border-b w-1 h-screen bg-neutral-100/10`} style={{left: (val/4) + '%'}}></div>     
          )
        }


  return (
        <>
        {im_lib.map((lib, i) => (
          <div key={i} className=' scroll-section flex items-center justify-center select-none '>
            <div key={i}>
                {loop_line_render(bg_bor_gal, 10, (im_lib.length) * 100)}
            </div>
            <div className={`${big_gal ? 'resize_sm m-auto' : 'resize_lg m-auto'} w-screen flex place-content-center`}>
          {/* scroll section */}
          <div className='w-[90%] m-auto h-[85%] flex '>
            <div className='w-[45%] h-full '>
              <img src={lib.left} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
            </div>
            <div className='w-[10%] h-full relative grid place-content-center'>
              <div className=' h-full w-full m-auto grid gap-4'>
                <Header />
                <div className='m-auto text-4xl cursor-pointer '>
                  {big_gal ? (
                    <span onClick={() => setBig_gal(false)}><RiZoomInLine className='hover:scale-125 sm_ooth'/></span>
                  ):(
                    <span onClick={() => setBig_gal(true)}><RiZoomOutLine className='hover:scale-90 sm_ooth' /></span>
                  )}
                </div>
              </div>
            </div>
            <div className='w-[45%] h-full'>
              <img src={lib.right} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
            </div>
            </div>
          {/* scroll section */}
          </div>
          </div>
        ))}
        </>

  )
}

export default Gal_card