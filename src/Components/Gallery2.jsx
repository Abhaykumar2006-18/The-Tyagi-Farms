import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import v1 from "../assets/v1.mp4";

const Gallery2 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="w-full bg-white py-20 px-5 md:px-12 overflow-hidden">

      {/* Animation CSS */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: all 0.9s ease;
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    
      <div className="max-w-7xl mx-auto">

        {/* 🔥 CENTER HEADING */}
        <div className="text-center mb-16 reveal">

          <p className="text-[#B08D57] uppercase tracking-[5px] text-sm font-semibold font-Cinzel">
            Visual Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-Cinzel font-bold text-[#1B1B1B] mt-4 leading-tight font-Cinzel">
            Explore The Beauty <br />
            <span className="text-[#B08D57] font-Cinzel">Of Tyagi Farms</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 font-Cinzel">
            Discover weddings, luxury stays, private parties and peaceful farmhouse vibes.
          </p>

        </div>
        

        {/* 🔥 GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">

          {/* BIG VIDEO */}
          <div className="reveal lg:col-span-7 relative rounded-[30px] overflow-hidden shadow-xl bg-black h-[450px] md:h-[560px]">
            <video
              src={v1}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-contain bg-black"
            />

            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full">
                  <p className="text-[#1B1B1B] text-sm font-semibold">
                     Featured Experience
                  </p>
              </div>
            </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">

            <ImageBox img={img1} title="Wedding Celebrations" />
            <ImageBox img={img2} title="Private Party Space" />

          </div>

          {/* BOTTOM ROW */}
          <ImageBox img={img3} title="Luxury Dining Setup" wide />
          <ImageBox img={img4} title="Peaceful Farmhouse Stay" wide />

        </div>

        {/* 🔥 BUTTON */}
        <div className="text-center mt-14 reveal">
          <Link
            to="/gallery"
            className="inline-block bg-[#B08D57] hover:bg-[#9a7745] text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
          >
            View Full Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
};

const ImageBox = ({ img, title, wide }) => {
  return (
    <div
      className={`reveal relative overflow-hidden rounded-[30px] shadow-lg group ${
        wide ? "lg:col-span-6 h-[320px]" : "h-[260px]"
      }`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-xs uppercase tracking-[3px] text-[#D6B16D] font-semibold">
          Tyagi Farms
        </p>

        <h3 className="text-xl md:text-2xl font-serif font-bold mt-1">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Gallery2;