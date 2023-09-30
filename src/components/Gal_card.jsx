import React from 'react'
import { im_lib } from '../data/imports'
import Header from './Header'
import {RiZoomOutLine, RiZoomInLine} from 'react-icons/ri'



const Gal_card = ({big_gal, setBig_gal}) => {

  
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

      <div className={`${big_gal ? 'resize_sm m-auto' : 'resize_lg m-auto'} flex justify-center`}>
    {/* scroll section */}
    <div className='w-[90%] max-w-[1800px] m-auto h-[85%] flex '>
      <div className='w-[45%] h-full '>
        <img src={doc.left} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
      </div>
      <div className='w-[10%] max-w-[100px] h-full relative grid place-content-center'>
        <div className=' h-full w-full m-auto grid gap-4 max-sm:hidden'>
          <Header />
            {magnify()}
        </div>
      </div>
      <div className='w-[45%] max-w-[1800px] h-full'>
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
             <div key={i} className='max-sm:hidden'>
             <div>{lg_card(lib, i)}</div>
            </div>
))}
        </>

  )
}

export default Gal_card