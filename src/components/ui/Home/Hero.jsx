import { ArrowUpRight } from 'lucide-react'
import image from "../../../assets/image/image.png.png"
import image1 from "../../../assets/image/image1.png.png"
import React from 'react'

export default function Hero() {
  return (
   <section className='bg-light overflow-hidden relative'>
   <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
    <div className='px-28 py-28'> 
      <h1 className='text-5xl font-bold px-5 py-2'> Keep track of</h1>
      <h1 className='text-5xl font-bold text-green-600 px-5 py-2'> Fitness Goal </h1>
      <h1 className='text-2xl px-5 py-2 font-bold'> Order on Simply Good Food </h1>
      <div className='flex gap-2 px-5 py-2'>
      <button className='bg-yellow-500 hover:text-black rounded-xl px-4 py-2 flex items-center gap-2'> Explore Menu  <ArrowUpRight size={20} /> </button>
      </div>
    </div>
    {/*hero image */}
    <div className='flex justify-center items-center relative'>
    <img src= {image1} alt="" className='absolute md:w-3/4 w-1/2' />
      <img src= {image} alt="" className='relative md:w-2/3 w-2/3' />
    </div>
   </div>
   </section>
  )
}
