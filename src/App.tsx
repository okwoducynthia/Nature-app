import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ServicePage from './Pages/ServicePage/ServicePage'
import ContactPage from './Pages/ContactPage/ContactPage'


function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
