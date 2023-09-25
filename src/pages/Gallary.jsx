import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../styles/App.css'
import HeaderHor from '../components/HeaderHor';
import { im_lib, item } from "../data/imports";
import Gal_card from '../components/Gal_card';

const Gallary = () => {

  const sectionRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${(im_lib.length - 1.5) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "6000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => pin.kill();
  }, []);


  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section"> 
          <div className=" bg-transparent overflow-hidden relative">
            <div className="h-screen w-screen opacity-[0.48] relative rotate-[5deg] left-[16%]" style={{background:`url(${item.b_gal_intro}) center/cover no-repeat`}}>
            </div>
            <div className='w-fit h-fit absolute left-1/3 -translate-x-1/2 whitespace-nowrap bottom-10'>
                  <h1 className='fo_t text-[10vw] text-black '>Image Gallary</h1>
              <div className='relative bottom-8 left-2'>
                  <HeaderHor />
              </div> 
        </div>
          </div>
          </div>
            <Gal_card />
            </div>
      </div>
    </section>
  )
}

export default Gallary