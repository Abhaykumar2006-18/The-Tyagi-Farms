import React from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import wedding from '../assets/wedding.mp4'
import { Link } from "react-router-dom";

const services = [
  {
    title: "Luxury Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
    description:
      "Elegant wedding celebrations designed with sophistication and unforgettable experiences.",
  },
  {
    title: "Premium Stays",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    description:
      "Beautiful rooms and peaceful surroundings for a luxurious stay experience.",
  },
  {
    title: "Private Parties",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200",
    description:
      "Celebrate birthdays, anniversaries, and private gatherings in style.",
  },
  {
    title: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    description:
      "Professional event spaces designed for meetings and corporate functions.",
  },
];

const Services = () => {

  
  return (
   <div className="min-h-screen w-[100%] overflow-hidden">
     <div className='relative z-50 bg-black '>
              <NavBar/>  
      </div> 



    <div className="min-h-[100vh] w-[100%] flex md:flex-row items-center flex-col-reverse gap-15 px-6 md:px-16 py-12 pb-15"> 
          <div className="w-[100%] md:w-1/2">
             <div className="overflow-hidden rounded-2xl shadow-2xl">
                 <video className="w-full h-[300px] md:h-[500px] object-cover" autoPlay muted loop playsInline src={wedding}></video>
             </div>
          </div>



          <div className="w-full md:w-1/2 mt-3 flex flex-col gap-7 ">

                    <h1 className="text-center relative font-Cinzel text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]">Weddings By Tyagi Farms</h1>
             <div className="space-y-4 font-Cinzel text-[17px] [text-align-last:left]  text-gray-700 leading-normal text-sm md:text-base">
                  <p className="mb-4 ">In India, weddings are a celebration of love, family, traditions, and lifelong memories. At <strong>Tyagi Farms</strong>, we believe every wedding deserves a setting that reflects the beauty of these cherished moments.</p>
                  <p className="mb-4">Nestled amidst lush greenery and elegant surroundings, Tyagi Farms offers a perfect blend of grandeur, warmth, and hospitality. Whether you dream of a traditional wedding ceremony, a vibrant pre-wedding celebration, or an intimate gathering with your closest family and friends, our venue provides the ideal backdrop for every occasion.</p>
                  <p className="mb-4">With spacious lawns, beautifully designed event spaces, and dedicated service, we ensure that every detail of your special day is thoughtfully taken care of. Our team works closely with you to create a seamless and memorable experience, allowing you to focus on celebrating the moments that matter most.</p>
                  <p>At Tyagi Farms, every wedding is unique, every celebration is heartfelt, and every memory lasts a lifetime. Let us be a part of your journey as you begin a new chapter surrounded by love, laughter, and unforgettable moments.</p>
                   <div className=" mx-auto mt-6 w-42 md:w-55 px-8 py-3 rounded-full font-Cinzel font-bold text-lg text-white bg-gradient-to-r from-amber-800 via-yellow-400 to-amber-600 shadow-[0_15px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_25px_80px_rgba(251,191,36,1)] hover:scale-105 transition-all duration-500 flex justify-center items-center"><Link to='/booking'><button>Book Now</button></Link></div>
            </div>
          
          </div>
    
    
    </div>


   </div>
  );
};

export default Services;