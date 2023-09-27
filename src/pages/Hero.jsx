import React from 'react'
import { item } from '../data/imports'
import Header from '../components/Header'
import { list } from 'postcss'
import Menu from '../components/Menu'
import Weather from '../components/Weather'
import { useInView } from 'react-intersection-observer'
import { Reveal } from 'react-reveal'


export const loop_line_render = (el, init, line_num, inc) => {
  const arr = []
  for (let i = init; i < line_num; i+= inc){
    arr.push(el(i))
  }
  return arr
}

const Hero = ({win_width}) => {
  const [data, setData] = React.useState([null, '']);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce:true,
  })
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce:true,
  })
  const [refImg, inViewImg] = useInView({
    threshold: 0.5,
    triggerOnce:true,
  })
  const bg_bor = (val) => {
    return(
      <div className={`absolute border-b w-[1px] h-[200vh] bg-gray-400/30 `} style={{left: (val) + 'px'}}></div>

    )
  }
  const date_show = () => {
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    return(
      <div ref={ref1}>
        <Reveal top cascade when={inView1}>
        <div className="grid place-items-center relative">
          <span className='border bg-white/70 px-2 text-xs rounded-lg'>Tampa, FL {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}</span>
          <span className='border bg-white/70 px-2 rounded-lg text-xs'>contact@bemneterbeto.com</span>
          <span className='border bg-white/70 px-2 text-xs rounded-lg'>{data[0]}&deg;{data[1]}</span>
        </div>
        </Reveal>
      </div>
    )
  }

 
  return (
    <>
        <div className='max-sm:hidden absolute sm:top-8 top-1/2 max-sm:-translate-y-1/4 left-10 z-20'>
          <Header />
        </div>
        <div className="max-sm:hidden absolute top-8 right-10 z-20">
          {date_show()}
        </div>
  
        <div className='max-sm:hidden'>
          <Weather setData={setData}/>
        </div>
          <div className='lines'>
            {loop_line_render(bg_bor, 0, win_width, 80)}
          </div>
        <div className='h-screen sm:min-h-[640px] relative overflow-hidden' id='Home'>
  
           <div ref={refImg} className='h-[70vh] min-h-[500px] max-h-[700px] w-auto absolute z-[99] -top-10 left-1/2 -translate-x-1/2 min-w-[500px] max-w-[650px]  sm:min-w-[800px]'>
           <Reveal top cascade when={inViewImg}>
           <img src={item.flip_hero} alt="img" className=' object-cover object-center w-full h-full m-auto'/>
           </Reveal>
           <div className='sm:hidden absolute top-14 left-20 z-50 border rounded-full bg-white p-1'>
          <Menu />
        </div>
           </div>
            <div ref={ref} className='absolute left-1/2 -translate-x-1/2 sm:bottom-10 bottom-0 m-auto w-full h-fit max-w-[2500px]'>
             <Reveal bottom opposite cascade when={inView}>
             <img src={item.hero_vis} alt="img" className='max-sm:hidden w-full h-full object-cover object-center'/>
              <img src={item.hero_vis_sm} alt="img" className='sm:hidden w-4/5 m-auto h-full object-cover object-center'/>
             </Reveal>
            </div>
        </div>
    </>
  )
}

export default Hero