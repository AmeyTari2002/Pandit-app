import React from 'react'
import Navbar from './components/Navbar'
import Sliding from './components/Sliding'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import AboutPage from './components/AboutPage'
import Vidhi from './components/Vidhi'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Sliding />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/About-us' element={<AboutPage />} />
          <Route path='/Vidhi' element={<Vidhi />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App