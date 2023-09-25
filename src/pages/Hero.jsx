import React from 'react'
import { item } from '../data/imports'
import Header from '../components/Header'
import { list } from 'postcss'

export const loop_line_render = (el, init, line_num) => {
  const arr = []
  for (let i = init; i < line_num; i+=10){
    arr.push(el(i))
  }
  return arr
}

const Hero = () => {
  const bg_bor = (val) => {
    return(
      <div className={`absolute border-b w-1 h-[200vh] bg-neutral-100/50`} style={{left: val + '%'}}></div>

    )
  }

  return (
    <>
        <div className='absolute top-8 left-10 '>
        <Header />
        </div>
          <div>
            {loop_line_render(bg_bor, 10, 100)}
          </div>
        <div className='h-screen relative' id='Home'>
            {/* <div className='h-[50vh] rotate-180 scale-x-[-1] -translate-y-' style={{background: `url(${item.b_0}) center/contain no-repeat`}}></div> */}
            {/*  sm:min-w-[500px] max-w-[650px] min-w-[700px] */}
           <div className='h-[70vh] min-h-[500px] max-h-[700px] w-auto absolute z-[99] -top-10 left-1/2 -translate-x-1/2 sm:min-w-[500px] max-w-[650px] min-w-[700px]'>
           <img src={item.b_0} alt="img" className='scale-x-[-1] rotate-180 w-full h-full m-auto'/>
           </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-10 m-auto w-full h-fit max-w-[2500px]'>
              <img src={item.hero_vis} alt="" className='w-full h-full object-cover object-center'/>
            </div>
        </div>
    </>
  )
}

export default Hero