import React from 'react'

const Map = () => {
  return (
    <>
     <div className="h-[70vh] w-[100%] bg-white flex justify-center items-center">
        <div className="w-[90%] h-[90%]  m-auto rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.8907840511597!2d77.74517554010494!3d30.459584273719145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2f7204dec8cb%3A0xbc32a72a36a21d96!2sTyagi%20Farms!5e0!3m2!1sen!2sin!4v1777190754366!5m2!1sen!2sin" className="w-full h-full border-0" loading="lazy" title="Tyagi Farms Location"></iframe>
        </div>
      </div>
    </>
  )
}

export default Map