import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Hero from './pages/Hero'
import About from './pages/About'


function App() {


  return (
    <BrowserRouter>
      <div className='fixed top-0 w-full z-10 flex items-start justify-between p-5'>
        <Header />
        <Menu />
      </div>
      <Routes>
        <Route path='/' element={<Hero />}/>
      </Routes>
      <About />
      <Footer />
    </BrowserRouter>
  )
}

export default App
