import React from 'react'
import NavBar from '../Components/NavBar'
import { motion } from 'framer-motion'
import {
  Building2,
  BedDouble,
  Trees,
  Car,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    title: 'Luxury AC Rooms',
    description:
      'Elegant fully air-conditioned rooms designed for premium comfort and peaceful stays.',
    icon: BedDouble,
  },
  {
    title: 'Grand Event Hall',
    description:
      'Sophisticated indoor venue with capacity for up to 1000 guests.',
    icon: Building2,
  },
  {
    title: 'Farm & Nature Experience',
    description:
      'Beautiful greenery, peaceful atmosphere, and luxury farmhouse vibes.',
    icon: Trees,
  },
  {
    title: 'Premium Catering',
    description:
      'Professional catering services for weddings and celebrations.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Spacious Parking',
    description:
      'Large and secure parking management for guests and events.',
    icon: Car,
  },
  {
    title: 'Wedding Celebrations',
    description:
      'Luxury wedding setups crafted for unforgettable moments.',
    icon: Sparkles,
  },
]
const Services = () => {
  return (
  
  <div className="min-h-screen bg-[#F9F7F2] text-black overflow-hidden">
    
    <NavBar />

    {/* Background Blur */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-3xl"></div>
    </div>

    {/* Hero Section */}
    <section className="px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
            Premium Farm Destination
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
            Exceptional Spaces

            <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Crafted For Celebrations
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Experience luxury stays, elegant events, and premium hospitality at Tyagi Farms.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="h-14 px-8 rounded-2xl bg-white text-black font-medium hover:scale-105 transition duration-300">
              Book Your Event
            </button>

            <button className="h-14 px-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">
              Explore Services
            </button>

          </div>

        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 hover:border-white/20 transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8">
                <Icon size={30} strokeWidth={1.7} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-8 text-sm text-white/80 hover:text-white transition duration-300">
                Learn More →
              </button>

            </motion.div>
          )
        })}

      </div>
    </section>

  </div>
)
  
}

export default Services