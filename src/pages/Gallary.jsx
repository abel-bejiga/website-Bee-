import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
        translateX: `-${(im_lib.length) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => pin.kill();
  }, []);


  return (
    <section className="h-screen w-screen gradient">
      <div ref={triggerRef}>
        <div ref={sectionRef} className={`sm:w-[900vw] w-[650vw] flex flex-row relative justify-center items-center`}>
          <div className="h-screen w-screen "> 
          <div className="overflow-visible relative">
            <div className="h-screen w-screen opacity-[0.9] relative rotate-[90deg] left-[16%] max-sm:hidden" style={{background:`url(${item.b_gal_intro}) center/contain no-repeat`}}>
            </div>
            <div className='w-fit h-fit sm:absolute sm:left-1/3 sm:-translate-x-1/2 whitespace-nowrap bottom-10'>
                  <h1 className='fo_t text-[10vw] text-white max-sm:hidden'>Image Gallary</h1>
                  
              <div className='relative bottom-8 left-2 max-sm:hidden'>
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