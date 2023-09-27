import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Gallary from './pages/Gallary'
import Contact from './pages/Contact'


function App() {
  const [win_width, setWin_width] = React.useState(window.innerWidth)
    const  win_size = () => {
      setWin_width(window.innerWidth)
    }

  React.useEffect(() => {
        window.addEventListener('resize', win_size)

        return () => window.removeEventListener('resize', win_size)
  }, [])

  return (
    <BrowserRouter>
      <Hero win_width={win_width}/>
      <About />
      <Gallary win_width={win_width}/>
      <Contact win_width={win_width}/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
