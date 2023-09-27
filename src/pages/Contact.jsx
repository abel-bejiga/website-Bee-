import React from 'react'
import { item } from '../data/imports'
import HeaderHor from '../components/HeaderHor'
import { loop_line_render } from './Hero'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../styles/App.css'
import Cont_card from '../components/Cont_card';

const Contact = ({win_width}) => {
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
      <div className={`absolute border-b w-[1px] h-[100vh] bg-gray-400/30 `} style={{left: (val) + 'px'}}></div>    
        )
      }
  return (
    <>
       <div id='contact'>
        <div className=''>
                {loop_line_render(bg_bor_cont, 0, win_width, 80)}
            </div>
        <div ref={contTriggerRef}>
          <div ref={contSectionRef} className="w-[200vw] flex flex-row relative">
          <div className="h-screen sm:min-h-[640px] w-screen">
          <div className='overflow-visible relative gradient_cont '>
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
        <div className="h-screen w-screen sm:min-h-[640px]">
        <div className='overflow-visible relative h-full w-full max-sm:hidden'>
              <Cont_card />
          </div>
          <div className='h-screen w-full sm:hidden'>
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