import React from 'react'
import '../styles/mu.css'
import { Divide as Hamburger } from 'hamburger-react'

const Menu = () => {
    const [muA, setMuA] = React.useState(false)

  return (
    <>
        <div className='absolute right-10 top-8 z-20'>
            <Hamburger toggled={muA} toggle={setMuA} size={60} easing='ease-in-out'/>
        </div>
    </>
  )
}

export default Menu