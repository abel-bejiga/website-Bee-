import React from 'react'
import '../styles/mu.css'
import { Divide as Hamburger } from 'hamburger-react'

const Menu = () => {
    const [muA, setMuA] = React.useState(false)

  return (
    <>
        <div>
            <Hamburger rounded toggled={muA} toggle={setMuA} size={25} easing='ease-in-out'/>
        </div>
    </>
  )
}

export default Menu