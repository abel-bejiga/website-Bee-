import React from 'react'
import { item } from '../data/imports'
import { col } from '../data/Styles'
import { FaAngleDoubleDown } from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import { Reveal } from 'react-reveal'

const Header = () => {
  const [y, setY] = React.useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce:true,
  })
  const sc_section = (id) => {
    const doc = document.getElementById(id)
    if (doc){
        doc.scrollIntoView({ behavior:'smooth', block: 'start' })
    }

  }
  const pe_ind = () => {
    return(
      <li className='rounded-full w-5 h-3 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
    )
  }
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setY(window.scrollY)
    })
  },[])


  return (
    <>
    {/* fixed top-8 left-10 */}
      <div ref={ref} className='max-sm:hidden'>
      <Reveal top cascade when={inView}>
      <div className='grid place-items-center gap-4'>
            <img src={item.be_lgo} alt="ico" className='w-12 rounded-lg cursor-pointer'/>
            <ul className='grid gap-2 place-items-center sm_ooth'>
              {y > 200 ? <AiOutlineHome onClick={() => sc_section('Home')} size={30} className='cursor-pointer' style={{color: col.t_col}}/> : ''}
              <li className='rounded-full w-5 h-3 cursor-pointer hover:h-30 hover:w-10' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='about rounded-full w-5 h-3 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='rounded-full w-5 h-3 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='rounded-full w-5 h-3 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
            </ul>
              <FaAngleDoubleDown size={30} className='cursor-pointer' style={{color: col.t_col}}/>
          </div>
      </Reveal>
      </div>
    </>
  )
}

export default Header