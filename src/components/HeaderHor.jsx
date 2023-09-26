import React from 'react'
import { item } from '../data/imports'
import { col } from '../data/Styles'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'


const HeaderHor = () => {
    const [y, setY] = React.useState(0)

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
      <div className=''>
      <div className='flex gap-4 items-center'>
            <img src={item.be_lgo} alt="ico" className='w-12 rounded-lg cursor-pointer'/>
            <ul className='flex gap-2 items-center sm_ooth'>
              {y > 200 ? <AiOutlineHome onClick={() => sc_section('Home')} size={30} className='cursor-pointer' style={{color: col.be_col}}/> : pe_ind()}
              {pe_ind()}
              {pe_ind()}
              {pe_ind()}
              {pe_ind()}
            </ul>
              <FaAngleDoubleRight size={30} className='cursor-pointer' style={{color: col.m_col}}/>
          </div>
      </div>
    </>
  )
}

export default HeaderHor