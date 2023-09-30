import React from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import { im_lib } from '../data/imports'
import {RiZoomOutLine, RiZoomInLine} from 'react-icons/ri'
import { useTransition, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer'
import { Reveal } from 'react-reveal'

const Gal_sm_card = ({big_gal, setBig_gal}) => {

const [currentImgSet, setCurrentImgSet] = React.useState(0)

    const next_img = () => {
      setCurrentImgSet(next => next === im_lib.length - 1 ? 0 : next + 1 )
    }
    const prev_img = () => {
      setCurrentImgSet(prev => prev === 0 ? im_lib.length - 1 : prev - 1 )
    }

    const [refTop, inViewTop] = useInView({
      threshold: 0.5,
      triggerOnce:true,
    })


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
const pageTransitions = useTransition(currentImgSet, {
  from: {
    position: 'absolute',
    opacity: 0,
    transform: 'perspective(800px) rotateY(-80deg)',
  },
  enter: {
    position: 'absolute',
    opacity: 1,
    transform: 'perspective(800px) rotateY(0deg)',
  },
  leave: {
    position: 'absolute',
    opacity: 0,
    transform: 'perspective(800px) rotateY(80deg)',
  },
  config: {
    mass: 5,
    tension: 120,
    friction: 50,
  },
});


  const sm_card = (doc, index) => {
    return (
      <div key={index} className='flex items-center justify-center select-none w-screen h-screen '>
        <div className={`${big_gal ? 'resize_sm_phone' : 'resize_lg_phone'} flex justify-center items-center`}>
          <div ref={refTop} className='w-[90%] m-auto h-[95%] overflow-hidden'>
                <Reveal left cascade opposite when={inViewTop}>
                  <div className='w-full h-[45%] '>
                    <img src={doc.left} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
                  </div>
                </Reveal>
              <div className='w-[90%] h-[10%] m-auto flex items-center justify-evenly'>
                  <div onClick={prev_img} className='p-3 shadow shadow-white rounded-full'>
                  <TfiAngleLeft />
                  </div>
                <div className=''>
                    {magnify()}
                </div>
                  <div onClick={next_img} className='p-3 shadow shadow-white rounded-full'>
                  <TfiAngleRight />
                  </div>
              </div>
                <Reveal right cascade opposite when={inViewTop}>
                  <div className='w-full h-[45%] '>
                    <img src={doc.right} alt="img" className='rounded-xl w-full h-full object-cover object-center'/>
                  </div>
                </Reveal>
            </div>
        </div>
      </div>
    )
  }
  return (
    <>
    <div className='h-screen flex items-center'>
      {pageTransitions((styles, i) => (
        <animated.div style={{
          ...styles,
          width: '100%',
          height: '100%',
          }}>
          <div>{sm_card(im_lib[i], i)}</div>
        </animated.div>
      ))}
    </div>
    </>
  )
}

export default Gal_sm_card