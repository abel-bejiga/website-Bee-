import React from 'react'
import { item } from '../data/imports'
import { col } from '../data/Styles'
import { FaAngleDoubleDown } from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'

const Header = () => {
  const [y, setY] = React.useState(0)

  const sc_section = (id) => {
    const doc = document.getElementById(id)
    if (doc){
        doc.scrollIntoView({ behavior:'smooth', block: 'start' })
    }

  }
  const pe_ind = () => {
    return(
      <li className='border rounded-full w-7 h-7 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
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
      <div>
      <div className='grid place-items-center gap-4'>
            <img src={item.be_lgo} alt="ico" className='w-16 rounded-2xl cursor-pointer'/>
            <ul className='grid gap-2 place-items-center sm_ooth'>
              {y > 200 ? <AiOutlineHome onClick={() => sc_section('Home')} size={40} className='cursor-pointer' style={{color: col.t_col}}/> : ''}
              <li className='border rounded-full w-7 h-7 cursor-pointer hover:h-40 hover:w-10' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='about border rounded-full w-7 h-7 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='border rounded-full w-7 h-7 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
              <li className='border rounded-full w-7 h-7 cursor-pointer' style={{backgroundColor: col.be_col, borderColor: col.t_col}}></li>
            </ul>
              <FaAngleDoubleDown size={40} className='cursor-pointer' style={{color: col.t_col}}/>
          </div>
      </div>
    </>
  )
}

export default Header