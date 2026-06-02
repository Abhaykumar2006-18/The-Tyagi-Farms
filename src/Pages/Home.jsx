import React from 'react'
import styles from './Styl/Home.module.css'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Map from '../Components/Map'
import S2 from './S2'
import Gallery2 from '../Components/Gallery2'
import Booking from './Booking'
import BookingHome from '../Components/BookingHome'
import v2 from '../assets/v2.mp4'
import Review from '../Components/Review'



const Home = () => {
  return (
    <>
        <div className={`${styles.main} min-h-[100vh] w-[100%] overflow-hidden relative`}>
            <video src={v2} autoPlay loop muted playsInline className='h-full w-full top-0 left-0 object-cover absolute z-0 '></video>
              <div className='absolute inset-0 bg-black/25 z-10 pointer-events-none'></div>
    
            <div className='relative z-50'>
               <NavBar/>
               
            </div>  
            
             <div className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'>
                   <div className='pointer-events-auto'>
                      <Hero />
                   </div>
            </div>
            
        </div>
         
        <Gallery2/>
        <BookingHome/>
        <Review/>
        
        <Map/>
        </>
  )
}

export default Home