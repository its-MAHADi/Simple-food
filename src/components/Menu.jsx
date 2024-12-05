import React from 'react'
import health from "../assets/image/food3.png.png"
import food from "../assets/image/food3.png.png"
import rice from "../assets/image/food3.png.png"

import { Star } from 'lucide-react'


export default function Menu() {
 
  return (
   <div>
     <div className='text-5xl text-center justify-center font-semibold mt-20'>
      <h1>New & Trending Menu</h1>
    </div>
    <div className='flex items-center justify-center mt-20 gap-5 '>
      <div  className='space-y-2 flex flex-col'>
        <img src= {health} alt="" />
        <h1 className='flex text-yellow-500 gap-2 font-semibold'> <Star className='text-yellow-500' /> 4.5/5 </h1>
        <h1 className='text-3xl font-semibold'>Heathy Food Name</h1>
        <h1 className='text-3xl font-semibold'>$ 100</h1>
        <button className='px-11 py-2 rounded-md bg-green-500 text-center'>Add to Chart</button>
      </div>

      <div className='space-y-2 flex flex-col'>
        <img src= {food} alt="" />
        <h1 className='flex text-yellow-500 gap-2 font-semibold'> <Star className='text-yellow-500' /> 4.5/5 </h1>
        <h1 className='text-3xl font-semibold'>Heathy Food Name</h1>
        <h1 className='text-3xl font-semibold'>$ 100</h1>
        <button className='px-4 py-2 rounded-md bg-green-500'>Add to Chart</button>
      </div>

      <div className='space-y-2 flex flex-col'>
        <img src= {rice} alt="" />
        <h1 className='flex text-yellow-500 gap-2 font-semibold'> <Star className='text-yellow-500' /> 4.5/5 </h1>
        <h1 className='text-3xl font-semibold'>Heathy Food Name</h1>
        <h1 className='text-3xl font-semibold'>$ 100</h1>
        <button className='px-4 py-2 rounded-md bg-green-500'>Add to Chart</button>
      </div>
    </div>
   </div>
  )
}
