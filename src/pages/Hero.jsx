import React from 'react'
import { item } from '../data/imports'
import Header from '../components/Header'
import { list } from 'postcss'
import Menu from '../components/Menu'
import Weather from '../components/Weather'

export const loop_line_render = (el, init, line_num) => {
  const arr = []
  for (let i = init; i < line_num; i+=10){
    arr.push(el(i))
  }
  return arr
}

const Hero = () => {
  const [data, setData] = React.useState(null);
  const bg_bor = (val) => {
    return(
      <div className={`absolute border-b w-1 h-[200vh] bg-neutral-100/50`} style={{left: val + '%'}}></div>

    )
  }
  const date_show = () => {
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    return(
      <div className=' '>
        <div className="grid place-items-center relative">
          <span className='border bg-white/70 px-2 text-xs rounded-lg'>Tampa, FL {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}</span>
          <span className='border bg-white/70 px-2 rounded-lg text-xs'>contact@bemneterbeto.com</span>
          <span className='border bg-white/70 px-2 text-xs rounded-lg'></span>
        </div>
      </div>
    )
  }

 
  return (
    <>
        <div className='absolute top-8 left-10 '>
          <Header />
        </div>
        <div className="absolute top-8 right-10 z-20">
          {date_show()}
        </div>
        <div>
          <Weather setData={setData}/>
        </div>
          <div>
            {loop_line_render(bg_bor, 10, 100)}
          </div>
        <div className='h-screen relative' id='Home'>

           <div className='h-[70vh] min-h-[500px] max-h-[700px] w-auto absolute z-[99] -top-10 left-1/2 -translate-x-1/2 sm:min-w-[500px] max-w-[650px] min-w-[700px]'>
           <img src={item.flip_hero} alt="img" className=' object-cover object-center w-full h-full m-auto'/>
           </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-10 m-auto w-full h-fit max-w-[2500px]'>
              <img src={item.hero_vis} alt="" className='w-full h-full object-cover object-center'/>
            </div>
        </div>
    </>
  )
}

export default Hero