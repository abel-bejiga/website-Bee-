import React from 'react'
import Header from './Header'
import { item } from '../data/imports'

const Cont_card = () => {
    // const [email_assist, setEmail_assist] = React.useState(false)
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
        <div className='w-3/4 h-3/4 min-h-[400px] overflow-auto rounded-xl shadow shadow-neutral-500 justify-center items-center m-auto flex'>
            <div className='w-[45%] h-full flex place-content-center'>
                <img src={item.ko_da} alt="img" className='object-contain object-center w-3/4 h-auto m-auto' />
            </div>
            <div className="w-[10%] h-full">
                <img src={item.te_let} alt="img" className='object-contain object-center w-full h-full '/>
            </div>
            <div className='w-[45%] h-full relative'>
                <div className='h-full w-1/2 -z-10 absolute left-1/2 -translate-x-1/2 top-0 right-0 opacity-50' style={{background: `transparent url(${item.se_fed}) center/contain no-repeat`}}></div>
                <form className=' w-full h-full grid place-content-center overflow-auto gap-4'>
                    <h1 className='text-6xl fo_t'>Get In Touch</h1>
                    <input type="text" placeholder='Enter your Name' min={1} max={20} className='rounded-lg outline-none h-9 cursor-pointer shadow shadow-neutral-500 p-1 invalid:text-red-400'/>
                   <div className='relative w-full'>
                   <input onChange={(e)=> setEmailVal(e.target.value)} type="email" placeholder='Enter your Email' value={emailVal}  className='rounded-lg outline-none h-9 w-full cursor-pointer shadow shadow-neutral-500 p-1 invalid:text-red-400' required/>
                    <div onClick={inpt_assist} className='absolute cursor-pointer right-2 px-2 top-1/2 -translate-y-1/2 rounded-lg border bg-neutral-200 hover:bg-neutral-300 hover:scale-105 sm_ooth'>@gmail.com</div>
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
