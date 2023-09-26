import React from 'react'
import { im_lib } from '../data/imports'
import Header from './Header'
import {RiZoomOutLine, RiZoomInLine} from 'react-icons/ri'
import { loop_line_render } from '../pages/Hero'


const Gal_card = ({big_gal, setBig_gal}) => {
  
  const bg_bor_gal = (val) => {
      return(
          <div className={`absolute top-0 -z-10 border-b w-[1px] h-screen bg-gray-400/10`} style={{left: (val/7.4) + '%'}}></div>     
          )
        }

  const magnify = () => {
    return (
      <div className='m-auto text-2xl sm:text-4xl cursor-pointer '>
      {big_gal ? (
        <span onClick={() => setBig_gal(false)}><RiZoomInLine className='hover:scale-125 sm_ooth'/></span>
      ):(
        <span onClick={() => setBig_gal(true)}><RiZoomOutLine className='hover:scale-90 sm_ooth' /></span>
      )}
    </div>
    )
  }

  const lg_card = (doc, index) => {
    return (
      <div key={index} className='h-screen sm:min-h-[640px] w-full flex items-center justify-center select-none '>
      <div key={index}>
          {loop_line_render(bg_bor_gal, 10, (im_lib.length + 1) * 100)}
      </div>
      <div className={`${big_gal ? 'resize_sm m-auto' : 'resize_lg m-auto'} flex justify-center`}>
    {/* scroll section */}
    <div className='w-[90%] m-auto h-[85%] flex '>
      <div className='w-[45%] h-full '>
        <img src={doc.left} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
      </div>
      <div className='w-[10%] h-full relative grid place-content-center'>
        <div className=' h-full w-full m-auto grid gap-4 max-sm:hidden'>
          <Header />
            {magnify()}
        </div>
      </div>
      <div className='w-[45%] h-full'>
        <img src={doc.right} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
      </div>
      </div>
    {/* scroll section */}
    </div>
    </div>
    )
  }

  const sm_card = (doc, index) => {
    return (
      <div key={index} className='flex items-center justify-center select-none '>
      <div key={index}>
          {loop_line_render(bg_bor_gal, 10, 100)}
      </div>
      <div className={`${big_gal ? 'resize_sm' : 'resize_lg'} w-screen flex justify-center items-center`}>
    {/* scroll section */}
    <div className='w-[90%] m-auto h-[85%] flex '>
      <div className='w-[45%] h-full '>
        <img src={doc.left} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
      </div>
      <div className='w-[10%] h-full relative grid place-content-center'>
        <div className=' h-full w-full m-auto grid gap-4 sm:hidden'>
          <Header />
            {magnify()}
        </div>
      </div>
      <div className='w-[45%] h-full'>
        <img src={doc.right} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
      </div>
      </div>
    {/* scroll section */}
    </div>
    </div>
    )
  }
  return (
        <>
        {im_lib.map((lib, i) => (
             <div key={i}>
             <div className='max-sm:hidden'>{lg_card(lib, i)}</div>
             <div className='sm:hidden'>{sm_card(lib, i)}</div>
         </div>
))}
        </>

  )
}

export default Gal_card