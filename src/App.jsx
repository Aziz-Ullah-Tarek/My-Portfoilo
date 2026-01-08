import React from 'react'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
