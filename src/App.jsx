import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Gallary from './pages/Gallary'
import Contact from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
      <Hero />
      <About />
      <Gallary />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
