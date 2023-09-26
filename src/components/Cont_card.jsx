import React from 'react'
import Header from './Header'
import { item } from '../data/imports'
import '../styles/anim.css'


const Cont_card = () => {

    const [usr_name, setUsr_name] = React.useState('')
    const [emailVal, setEmailVal] = React.useState('')

const inpt_assist = () => {
    setEmailVal(emailVal.includes('@') ? emailVal.slice(0, emailVal.indexOf('@')) + '@gmail.com' : emailVal + '@gmail.com')
}


  return (
    <>
      <div className='h-full w-full flex gradient_cont'>
      <div className='absolute top-8 left-10 '>
          <Header />
        </div>
        <div className='w-3/4 sm:h-3/4 h-5/6 min-h-[400px] overflow-auto rounded-xl shadow shadow-neutral-500 justify-center items-center m-auto sm:flex max-sm:grid'>
            <div className='sm:w-[45%] w-full h-full flex place-content-center'>
                <img src={item.ko_da} alt="img" className='object-contain object-center w-3/4 h-auto m-auto' />
            </div>
            <div className="w-[10%] h-full max-sm:hidden">
                <img src={item.te_let} alt="img" className=' object-contain object-center w-full h-full '/>
            </div>
            <div className='sm:w-[45%] w-full h-full relative'>
                <div className='h-full sm:w-1/2 w-full max-sm:m-auto -z-10 absolute left-1/2 -translate-x-1/2 top-0 right-0 opacity-50' style={{background: `transparent url(${item.se_fed}) center/contain no-repeat`}}></div>
                <form className=' w-full h-full grid place-content-center overflow-auto gap-4 select-auto'>
                    <h1 className='sm:text-6xl text-4xl max-sm:text-center fo_t'>Get In Touch</h1>
                    <input onChange={(e)=> setUsr_name(e.target.value)} type="text" placeholder='Enter your Name' min={1} max={20} value={usr_name} className='rounded-lg outline-none h-9 cursor-pointer shadow shadow-neutral-500 p-1 invalid:text-red-400 capitalize'/>
                      <div className='relative w-full'>
                      <input onChange={(e)=> setEmailVal(e.target.value)} type="email" placeholder='Enter your Email' value={emailVal}  className='rounded-lg outline-none h-9 w-full cursor-pointer shadow shadow-neutral-500 p-1 invalid:text-red-400' required/>
                        <div onClick={inpt_assist} className={`${emailVal === '' ? 'hidden' : 'fadeIn'} absolute max-sm:text-sm cursor-pointer sm:right-2 right-1 sm:px-2 px-1 top-1/2 -translate-y-1/2 sm:rounded-lg rounded border bg-neutral-200 hover:bg-neutral-300 hover:scale-105 sm_ooth`}>@gmail.com</div>
                      </div>
                    <textarea name="contact" id="contact" cols="30" rows="5" minLength={10} maxLength={250}  placeholder='Enter your Message'   className='rounded-lg outline-none cursor-pointer shadow shadow-neutral-500 p-1 invalid:text-red-400' required></textarea>
                   <div className='w-full h-fit flex justify-end'>
                   <button type="submit" className='rounded-lg outline-none h-7 cursor-pointer w-fit px-5 shadow shadow-neutral-500'>Send</button>
                   </div>

                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cont_card
