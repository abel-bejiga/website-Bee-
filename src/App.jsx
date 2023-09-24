import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Hero from './pages/Hero'
import About from './pages/About'
import Gallary from './pages/Gallary'



function App() {

  const [refVal, setRefVal] = useState(false)

  return (
    <BrowserRouter>
      <div className={`${refVal ? 'fadeOut z-0' : 'fadeIn z-50'} fixed top-0 w-full `}>
        <Header />
        <Menu />
      </div>
      <Routes>
        <Route path='/' element={<Hero />}/>
      </Routes>
      <About />
      <Gallary setRefVal={setRefVal}/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
