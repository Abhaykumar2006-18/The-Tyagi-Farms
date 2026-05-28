import React from 'react'
import styles from './style/Hero.module.css'

const Hero = () => {
  return (
     <div className='h-[90vh] w-full  flex justify-center items-center text-center px-5 md:px-10 flex-col pt-4 gap-1'>
        <h1 className='text-3xl md:text-5xl text-white font-serif [text-align-last:center]  font-bold tracking-wide leading-tight  [text-shadow:0_2px_10px_rgba(0,0,0,0.6),0_5px_25px_rgba(0,0,0,0.8)]'>Welcome To The Place Where Luxury <br/>Meets Affordability....</h1>
        <h1 className='text-white mt-8 text-lg md:text-xl font-Cinzel [text-align-last: center] [text-shadow:0_0_10px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.3)]  tracking-wide leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.6),0_5px_25px_rgba(0,0,0,0.8)]'>An exclusive farmhouse destination for weddings, parties,<br/> and private events—where every celebration is elevated with luxury, comfort, and memorable stay experiences.</h1>
        <div className='font-mono mt-10 flex gap-8 md:gap-14'><button onClick={()=>window.open("https://maps.app.goo.gl/Vw5iWc3tpYv1FRdQ9")} className='px-2 py-3 md:px-6 text-md md:text-base font-semibold text-white rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'>Visit Location</button>
                                             <button onClick={()=>window.location.href="tel:+918958366236"} className='px-6 py-2 text-sm md:text-base font-semibold text-white rounded-xl backdrop-blur-md bg-white/20 border border-white/40 hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'>Call Now</button></div>
     
        
     </div>
  )
}

export default Hero