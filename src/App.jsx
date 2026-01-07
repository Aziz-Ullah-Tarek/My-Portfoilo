import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
    </>
  )
}

export default App
