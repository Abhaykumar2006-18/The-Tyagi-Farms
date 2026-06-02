import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "motion/react"


const reviews = [
  {
    name: "Rohit Sharma",
    days: "8 days ago",
    photo: "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWVufGVufDB8fDB8fHww",
    review: "Large functions ke liye perfect place. Space kaafi hai aur management bhi achha hai.",
    stars: 5,
  },
  {
    name: "Priya Verma",
    days: "12 days ago",
    photo: "https://images.pexels.com/photos/36226632/pexels-photo-36226632.jpeg",
    review: "Mere bhai ki reception yahin hui thi. Staff cooperative tha aur arrangements time par ready the. Guests ko bhi venue kaafi pasand aaya .",
    stars: 4,
  },
  {
    name: "Amit Kumar",
    days: "18 days ago",
    photo: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    review: "Venue ka setup dekhkar sab relatives impress ho gaye. Bahut classy feel aati hai",
    stars: 5,
  },
  {
    name: "Neha Singh",
    days: "25 days ago",
    photo: "https://images.pexels.com/photos/36142661/pexels-photo-36142661.jpeg",
    review: "Perfect venue for birthday parties. Ample parking and great service.",
    stars: 4,
  },
  {
    name: "Vikas Gupta",
    days: "1 month ago",
    photo: "https://images.pexels.com/photos/11311293/pexels-photo-11311293.jpeg",
    review: "Reception ke liye venue book kiya tha. Management team ne har cheez professionally handle ki..",
    stars: 5,
  },
  {
    name: "Anjali Mehta",
    days: "2 months ago",
    photo: "https://images.pexels.com/photos/8752656/pexels-photo-8752656.jpeg",
    review: "Great place for family functions. AC rooms were very comfortable.",
    stars: 5,
  },
];

const Review = () => {
  return (
    <div className='min-h-[70vh] w-[100%] bg-[#F9F7F2] p-3 mb-8 md:mb-16'>
        <div className='text-blue-900 text-2xl text-center font-Cinzel font-semibold p-2 md:text-4xl mt-5 md:mt-10'><h1><FaQuoteLeft className='inline mx-2'/> Read What Our Customers Say</h1></div>
        <div className='grid grid-cols-1 mt-6 md:mt-10 max-w-[1300px] md:grid-cols-3 p-3 md:px-8 gap-4 md:gap-10 m-auto'>
          
           
           {/*this code is for cards */}
       {reviews.map((review , idx) =>(
            
       
            <motion.div key={idx} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:idx*0.15}} viewport={{once:true,amount:0.3}} whileHover={{y:-10}} className='min-h-[250px] bg-gray-200 shadow-2xl border border-gray-200 rounded-2xl overflow-hidden'>


                 
                     <div className='min-h-[30%]  flex items-center px-5 rounded-t-2xl '>
                     <div className=' h-[60px] w-[60px] overflow-hidden rounded-full mt-2'> <img src={review.photo} alt="" /></div>
                     <div className='flex flex-col leading-2'>
                        <h1 className='mx-2 text-xl font-Cinzel font-semibold'>{review.name}</h1>
                        <h1 className='mx-3 text-[13px] '>{review.days}</h1>
                    </div>
                
                
                </div>
                
                <div className='h-[70%] p-5 font-Poppins text-center relative'>
                    <h1 className='text-left'>{review.review}</h1>
                       <div className=' h-[40px] w-[100px]  absolute bottom-2 left-8'> <h1>{"⭐".repeat(review.stars)}</h1></div>
                </div>
               










            </motion.div>
           ))}
            
        {/*card end */}

        
        </div>
    </div>
  )
}

export default Review