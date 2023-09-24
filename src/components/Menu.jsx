import React from 'react'
import '../styles/mu.css'
import { Divide as Hamburger } from 'hamburger-react'

const Menu = () => {
    const [muA, setMuA] = React.useState(false)

  return (
    <>
        <div>
            <Hamburger toggled={muA} toggle={setMuA} easing='ease-in-out'/>
        </div>
    </>
  )
}

export default Menu