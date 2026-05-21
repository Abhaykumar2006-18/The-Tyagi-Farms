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
          <p className="text-amber-700  uppercase tracking-[4px] text-sm md:text-2xl font-semibold">
            Our Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Explore Tyagi Farms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Take a look at our beautiful farmhouse, celebration spaces, wedding setup,
            party hall, and peaceful natural surroundings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((img, index) => (
            <div
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
            </div>
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