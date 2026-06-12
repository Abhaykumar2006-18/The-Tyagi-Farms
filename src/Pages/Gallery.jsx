import React from "react";
import NavBar from '../Components/NavBar'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img15 from '../assets/img15.png'
import img16 from '../assets/img16.png'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'
import img19 from '../assets/img19.png'
import v1 from '../assets/v1.mp4'
import { easeOut, motion } from "framer-motion";



const Gallery = () => {
  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
    img12,
    img13,
    img15,
    img16,
    img17,
    img18,
    img19

  ];

  return (
    <>
    <div className="min-h-[100vh] w-full bg-black overflow-x-hidden">
      <NavBar/>
    <section className=" w-full bg-[#f8f5ef] py-16 px-5 md:px-12">
        

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.p initial={{x:200,opacity:0,skewX:20}} animate={{x:0,opacity:1,skewX:0}} transition={{duration:0.5, delay:0.6,type:"spring"}} className="text-[#B08D57] font-Cinzel uppercase tracking-[4px] text-sm md:text-2xl font-semibold">
            Our Gallery
          </motion.p>
          <motion.h2 initial={{x:-200,opacity:0,skewX:20}} animate={{x:0,opacity:1,skewX:0}} transition={{duration:1 , delay:0.8,type:"spring"}} className="text-4xl md:text-7xl font-Cinzel font-bold text-gray-900 mt-3">
            Explore Tyagi Farms
          </motion.h2>


          <motion.p initial={{opacity:0,rotateX:90,y:50}} animate={{opacity:1,rotateX:0,y:0}} transition={{duration:1,delay:1,type:"spring",stiffness:100}} className="text-gray-600 max-w-2xl mx-auto mt-4 font-Cinzel">
            Take a look at our beautiful farmhouse, celebration spaces, wedding setup,
            party hall, and peaceful natural surroundings.
          </motion.p>
        </div>


      
    


      <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1 , delay:1.5 , ease:easeOut}}  className="px-5 md:px-16 lg:px-24 py-24 bg-white ">
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
      </motion.section>




        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((img, index) => (
            <motion.div initial={{opacity:0,x:index%2===0?-200:200,rotate:index%2===0?-8:8,scale:0.85}} whileInView={{opacity:1,x:0,rotate:0,scale:1}} viewport={{once:true}} transition={{duration:1,delay:0.5,ease:[0.22,1,0.36,1]}}
              key={index}
              className="group relative h-72 overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Tyagi Farms Gallery ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition duration-500"></div>

              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-semibold">Tyagi Farms</h3>
                <p className="text-sm">Luxury Farmhouse Experience</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
    </section>



      <div className="h-[90vh] w-screen bg-white py-4 px-4 md:py-10 md:px-10">
              <div className="w-[90%] h-full mx-auto overflow-hidden rounded-3xl shadow-xl">
                   <video src={v1} autoPlay  muted loop playsInline className="w-full h-full object-cover"></video>
              </div>
        </div>




  </div>

    </>
  );
};

export default Gallery;