import React from 'react'
import NavBar from '../Components/NavBar'
import styles from './Styl/AboutUs.module.css'
import img2 from '../assets/img2.png'
import img1 from '../assets/img4.png'

const AboutUs = () => {
  return (
  
     <>
    <div className="h-[50vh] w-[100%] bg-black overflow-hidden ">
          < NavBar/>
          <div className='h-[25vh] w-[100%] bg-pink-500 bg-cover bg-center' style={{backgroundImage: `url(${img2})`}} ></div>
    
    </div>
      <section className="px-5 md:px-16 lg:px-24 py-24 bg-white">
        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600"
            alt="Tyagi Farms Event"
            className="h-[520px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>

          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-2xl text-white">
              <p className="uppercase tracking-[6px] text-sm text-[#d9b765] font-bold">
                Tyagi Farms
              </p>

              <h2 className="text-3xl md:text-6xl font-serif font-bold mt-5 leading-tight">
                A Place Where Every Moment Looks Beautiful
              </h2>

              <p className="text-gray-200 mt-6 text-lg leading-8">
                Weddings, parties, birthdays, family stays and more — every
                experience is designed to feel peaceful, premium and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    <div className='min-h-[80vh] w-[100%]  p-5 md:p-10 gap-10 flex justify-around md:flex-row flex-col text-black items-center' >
        <div className='h-[35%] bg-blue-500 w-[90%] md:h-[40%] md:w-[30%]'><img className='h-full w-full'  src='data:image/jpeg;base64,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' alt="" /></div>
        <div className='w-[90%] md:w-[50%]'><h1 className='text-[20px] md:text-xl font-Cinzel'>Tyagi Farms, located in Dehradun (Herbertpur), is the perfect place to celebrate your most special moments in style. We offer a beautiful and spacious venue for grand weddings, along with premium services like elegant golden utensils that add a royal feel to your dining experience. Our private party halls are ideal for birthdays, anniversaries, and all kinds of celebrations. With lively DJ music, a pleasant atmosphere, and friendly service, we make sure every event is full of joy and unforgettable memories. Whether it’s a small gathering or a big celebration, Tyagi Farms is here to make your day truly special.</h1></div>
    
    
    </div>
      
    





    <div className='min-h-[50vh] w-[100%] flex flex-col justify-center items-center gap-6 md:gap-10 px-5 md:p-15'>
       <h1 className='text-4xl md:text-6xl font-Mea '>Contact us for Enquiry</h1>
       <h1 className='font-Cinzel [text-align-last:center]'>Your perfect celebration deserves the perfect place. Discover Tyagi Farms and create memories that last forever. Book now and celebrate life the way it should be — grand and unforgettable.</h1>
       <a href="tel:+918958366236">
  <button
    className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-2 rounded-xl 
    text-white font-semibold shadow-md 
    hover:from-red-600 hover:to-red-800 hover:scale-105 
    hover:shadow-[0_0_15px_rgba(239,68,68,0.7)] 
    active:scale-95 transition duration-300"
  >
    Call Now
  </button>
</a>
    </div>


    
    </>
     
    
  )
}

export default AboutUs