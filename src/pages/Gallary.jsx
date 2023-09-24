import React from 'react'
import { useInView } from 'react-intersection-observer'
import { item } from '../data/imports'

const Gallary = ({setRefVal}) => {
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

  return (
    <>
        <div ref={ref} className='h-screen overflow-hidden relative bg-blck '>
            {/* <div className='py-20'></div> */}
            <div className='h-full opacity-[0.48] relative rotate-[5deg] left-[16%]' style={{background: `url(${item.b_gal_intro}) center/cover no-repeat`}}></div>
            <div className='w-fit h-fit absolute left-1/3 -translate-x-1/2 whitespace-nowrap bottom-10 mix-blend-difference'>
                <h1 className='fo_t text-[10vw] text-white '>Image Gallary</h1>
            </div> 
        </div>
    </>
  )
}

export default Gallary