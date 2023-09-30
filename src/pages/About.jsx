import React from 'react'
import { item } from '../data/imports'
import { useInView } from 'react-intersection-observer'
import { Reveal } from 'react-reveal'

const About = () => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce:true,
      })

  return (
        <>
            <div className='seat h-screen sm:min-h-[700px] relative' id='about'>
                <div className='xl:w-[400px] w-48 sm:w-60 m-auto max-sm:absolute top-1/2 max-sm:-translate-y-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2'>
                    <img src={item.se_at} className='w-full opacity-[40%] m-auto object-cover object-center' alt="ico" />
                </div>
                <div className='sm:hidden w-full h-screen absolute opacity-[0.2]'>
                    <img src={item.b_sec_fed} alt="img" className='w-full h-full relative object-cover object-center'/>
                </div>
                <div ref={ref} className='absolute bottom-10 left-1/2 -translate-x-1/2 sm:left-1/4 sm:-translate-x-1/2 w-3/4 sm:w-[45%] overflow-hidden'>
                    <Reveal bottom  opposite when={inView}>
                    <h1 className='sm:font-[SFPro-thin] font-[SFPro-rounded] about-slogan 2xl:text-7xl xl:text-5xl sm:text-5xl text-2xl w-full text-center uppercase'>A beauty that is truly captivating, radiating grace and elegance with every glance.</h1>
                    </Reveal>
                </div>
                    <div className='max-sm:hidden absolute xl:top-20 top-7 xl:right-0 -right-40 z-[1] overflow-hidden' style={{height: 'calc(100% - 5rem)'}}>
                        <img src={item.b_sec} alt="img" className='object-cover object-center'/>
                    </div>
      
            </div>

        </>
    )
}

export default About