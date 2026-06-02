import React from 'react'
import Home from './Pages/Home'
import S2 from './Pages/S2'
import { Route , Routes } from 'react-router-dom'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Experiences from './Pages/Experiences'
import AboutUs from './Pages/AboutUs'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Map from './Components/Map'
import Booking from './Pages/Booking'




const App = () => {
  return (
    <>
    
    
    <div className='min-h-[100vh] w-[100%] '>

      
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/services' element={<Services/>} />
          <Route path='/experiences' element={<Experiences/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/booking' element={<Booking/>}/>
       </Routes>
    </div>
   
   
    <Footer/>
    
    
    
    
    </>
  )
}

export default App