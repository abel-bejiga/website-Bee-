import React from 'react'
import { item } from '../data/imports'
import HeaderHor from '../components/HeaderHor'
import { loop_line_render } from './Hero'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../styles/App.css'
import Cont_card from '../components/Cont_card';

const Contact = () => {
  const contSectionRef = React.useRef(null);
  const contTriggerRef = React.useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const contPin = gsap.fromTo(
      contSectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-100vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: contTriggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => contPin.kill();
  }, []);



  const bg_bor_cont = (val) => {
    return(
        <div className={`absolute top-0  border-b w-1 h-screen bg-neutral-100/50`} style={{left: val + '%'}}></div>     
        )
      }
  return (
    <>
       <div className="scroll-section-outer">
        <div ref={contTriggerRef}>
          <div ref={contSectionRef} className="scroll-section-inner">
          <div className="scroll-section">
          <div className='overflow-visible relative gradient_cont '>
        <div className='relative'>
                {loop_line_render(bg_bor_cont, 10, 100)}
            </div>
            <div className='w-full h-[55%]'>
                <img src={item.b_cont} alt='img' className='relative w-full h-full object-cover object-center' />
            </div>
            <div className='w-fit h-fit m-auto whitespace-nowrap bottom-10'>
                <h1 className='text-[10vw] whitespace-nowrap fo_t text-center'>Contact Page</h1>
                <div className='relative bottom-8 left-7'>
                  <HeaderHor />
              </div> 
            </div>
        </div>
        </div>
        <div className="scroll-section">
        <div className='overflow-visible relative h-full w-full'>
              <Cont_card />
          </div>
        </div>

        </div>
        </div>
       </div>
    </>
  )
}

export default Contact