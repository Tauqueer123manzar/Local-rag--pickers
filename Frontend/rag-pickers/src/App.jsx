import React from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Ragpickers from './components/Ragpickers.jsx'
import Service from './components/Service.jsx'
import Contact from './components/Contact.jsx'
const App = () => {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ragpickers' element={<Ragpickers/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
