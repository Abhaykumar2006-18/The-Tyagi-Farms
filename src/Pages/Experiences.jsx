import React from "react";
import NavBar from "../Components/NavBar";
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

const experiences = [
  {
    title: "Luxury Weddings",
    desc: "Celebrate your big day with elegant décor, open lawns, premium arrangements, and a beautiful farmhouse atmosphere.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
    tag: "Royal Celebration",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    ],
  },
  {
    title: "Private Parties",
    desc: "Host exclusive parties with privacy, comfort, music, lights, and a stylish celebration setup.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200",
    tag: "Exclusive Gathering",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
    ],
  },
  {
    title: "Birthday Parties",
    desc: "Make birthdays memorable with a beautiful venue, joyful ambience, and a perfect space for friends and family.",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200",
    tag: "Special Moments",
    gallery: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    ],
  },
  {
    title: "Family Stay",
    desc: "Enjoy peaceful family time with comfort, privacy, fresh air, and a relaxing farmhouse experience.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    tag: "Luxury Stay",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
  },
];
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
]
const Experiences = () => {
  return (
    <div className="w-full bg-[#fffaf1] text-[#1f1b16] overflow-hidden">
      <div className="relative z-50 bg-[#1f1b16]">
        <NavBar />
      </div>

      {/* HERO */}
      <section className="relative min-h-[90vh] px-5 md:px-16 lg:px-24 py-16 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(31,27,22,0.08),transparent_35%)]"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-[#b89b5e]/30 px-5 py-2 rounded-full shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#b89b5e]"></span>
            <p className="uppercase tracking-[4px] text-xs md:text-xl text-[#8b6f35] font-Cinzel">
              Tyagi Farms Experiences
            </p>
          </div>

          <h1 className="text-4xl md:text-7xl font-Cinzel font-bold leading-tight ">
            Premium Experiences For Every Celebration
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-8 max-w-2xl font-Grenze">
            From luxury weddings to private parties, birthday celebrations and
            peaceful family stays, Tyagi Farms creates unforgettable moments in
            a beautiful farmhouse setting.
          </p>

          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {["Weddings", "Parties", "Birthdays", "Family Stay"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-[#b89b5e]/20 rounded-2xl px-4 py-5 shadow-md text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-serif font-bold text-lg">{item}</h3>
                  <p className="text-sm text-gray-500 mt-1">At Tyagi Farms</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full border border-[#b89b5e]/40"></div>
          <div className="absolute -bottom-8 -left-8 h-56 w-56 bg-[#b89b5e]/20 rounded-full blur-3xl"></div>

          <div className="relative bg-white p-3 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.18)] rotate-1">
            <img
              src={img1}
              alt="Tyagi Farms"
              className="h-[520px] w-full object-cover rounded-[2.5rem]"
            />

            <div className="absolute inset-3 rounded-[2.5rem] bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="absolute -bottom-10 left-8 bg-white/85 backdrop-blur-xl shadow-2xl rounded-3xl p-6 max-w-[320px] border border-white">
            <p className="text-sm uppercase tracking-[3px] text-[#b89b5e] font-bold">
              Luxury Venue
            </p>
            <h3 className="text-3xl font-serif font-bold mt-2">
              Elegant. Private. Memorable.
            </h3>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="relative bg-white px-5 md:px-16 lg:px-24 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,155,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(184,155,94,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="relative text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[6px] text-sm text-[#b89b5e] font-Cinzel font-bold">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-6xl font-kaushan font-Cinzel font-bold mt-5 leading-tight">
            Our Farm Experiences
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8 font-Cinzel">
            Explore beautiful wedding moments, party setups, birthday memories,
            and peaceful family stays at Tyagi Farms.
          </p>
        </div>

        <div className="relative space-y-24">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[#b89b5e]/40 via-transparent to-black/10 blur-sm opacity-70"></div>

                <div className="relative bg-[#fffaf1] p-3 rounded-[3rem] shadow-[0_25px_70px_rgba(0,0,0,0.14)] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[420px] w-full object-cover rounded-[2.4rem] group-hover:scale-[1.04] transition-all duration-700"
                  />

                  <div className="absolute inset-3 rounded-[2.4rem] bg-gradient-to-t from-black/45 via-black/5 to-transparent"></div>

                  <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/70 shadow-lg">
                    <p className="text-sm font-Cinzel font-bold text-[#8b6f35]">
                      {item.tag}
                    </p>
                  </div>
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="inline-block text-[#b89b5e] text-lg font-bold bg-[#fff6df] px-4 py-2 rounded-full">
                  0{index + 1}
                </span>

                <h3 className="text-3xl md:text-5xl font-Cinzel font-bold mt-5 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-6 text-lg font-Cinzel leading-8 max-w-xl">
                  {item.desc}
                </p>

                <div className="mt-8">
                  <p className="uppercase tracking-[4px] text-xs text-[#8b6f35] font-bold mb-4 font-Cinzel">
                    Moments From Our Farm
                  </p>

                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {item.gallery.map((photo, i) => (
                      <div
                        key={i}
                        className="group/photo relative overflow-hidden rounded-2xl shadow-md"
                      >
                        <img
                          src={photo}
                          alt={item.title}
                          className="h-28 w-full object-cover group-hover/photo:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/photo:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO WALL */}
      <section className="px-5 md:px-16 lg:px-24 py-24 bg-[#fffaf1]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[6px] text-sm text-[#b89b5e] font-bold font-Cinzel">
            Gallery Preview
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5 font-Cinzel">
            Beautiful Moments At Tyagi Farms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[100%]">
         
            {photos.map((photo,idx)=>{
              return(
               <div key={idx} className="overflow-hidden sm:h-10 md:h-[400px] ">
                   <img src={photo} className="w-full h-full  object-cover cursor-pointer" />
               </div>
              )
            })}
        
        </div>
      </section>

      {/* FINAL VISUAL SECTION */}
    
    </div>
  );
};

export default Experiences;