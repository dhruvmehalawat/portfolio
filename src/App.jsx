import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { Skills } from './sections/Skills'
import Showcase from './sections/Showcase'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Showcase/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App