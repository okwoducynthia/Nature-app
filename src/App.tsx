import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Images from './Components/Images-section/Images'
import Quote from './Components/Quote/Quote'
import About from './Components/About-us/About'
import Question from './Components/Question/Question'
import Footer from './Components/Footer/Footer'


function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Images/>
        <Quote/>
        <About/>
        <Question/>
        <Footer/>
      </div>
    </>
  )
}

export default App
