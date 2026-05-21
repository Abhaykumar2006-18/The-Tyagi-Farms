import React from 'react'

const S2 = () => {
  return (
    <div className="p-3 md:py-12 text-white  bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('../src/assets/img3.png')] bg-cover bg-center">
      <div className='flex justify-center items-center'><h1 className=' text-3xl md:text-5xl p-5 font-kaushan leading-tight [letter-spacing:3px]'>Welcome To The Tyagi Farms , Dehradun</h1></div>
      <div className='h-[90vh] w-[100%] md:mt-[-40px] p-4 flex flex-col md:flex-row justify-evenly items-center'>
        <div className="w-[100%] md:w-[35%] border-none outline-none"><img className='w-full rounded-xl curso' src='../src/assets/img1.png' alt="" /></div>
        <div className='w-[100%] md:w-[50%] h-[50%]'><h1 className='text-xl md:text-2xl font-Poppins'> We offers a premium and peaceful venue for weddings, birthday parties,
        family functions, corporate gatherings, and special celebrations. With elegant
        spaces and a welcoming atmosphere, we turn your moments into unforgettable memories.</h1>
        
        <h1 className='text:xl md:text-2xl mt-3 text-white md:text-gray-200 font-Grenze'>Whether it’s a wedding, birthday, or private celebration, Tyagi Farms offers a versatile and elegant venue tailored to your needs. We create a perfect setting where every event becomes a cherished memory.</h1>
        </div>
    </div>
      
    </div>
  )
}

export default S2