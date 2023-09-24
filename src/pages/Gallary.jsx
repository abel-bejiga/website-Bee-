import React from 'react'
import { useInView } from 'react-intersection-observer'
import { item } from '../data/imports'
import { useTransform, motion, useScroll } from 'framer-motion'

const Gallary = ({setRefVal}) => {
  const targetRef = React.useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.3
  })
  React.useEffect(() => {
    if (inView) {
        setRefVal(true)
    } else {
        setRefVal(false)
    }
  }, [inView, setRefVal])

  const HorizontalScroll = () => {
    const targetRef = React.useRef<HTMLDivElement | null>(null)
    const { scrollX } = useScroll({target: targetRef})

    useTransform(scrollX, [0, 1], ['0%', '-95%'])

    return (
      <>
 <section ref={targetRef} className='relative h-[300vh] bg-red-300'>
         
         <div className=' sticky top-0 flex h-screen items-center overflow-hidden '>
              <div className='flex gap-4'>
                  <div className=''></div>
              </div>
         </div>
       </section>
      </>
    )
  }

  return (
    <>
     <div ref={ref} className='h-screen overflow-hidden relative bg-blck '>
              {/* <div className='py-20'></div> */}
              <div className='h-full opacity-[0.48] relative rotate-[5deg] left-[16%]' style={{background: `url(${item.b_gal_intro}) center/cover no-repeat`}}></div>
              <div className='w-fit h-fit absolute left-1/3 -translate-x-1/2 whitespace-nowrap bottom-10 mix-blend-difference'>
                  <h1 className='fo_t text-[10vw] text-white '>Image Gallary</h1>
              </div> 
          </div>
       <div>
        
       </div>
    </>
  )
}

export default Gallary