import React from 'react'
import health from "../../assets/health.png.png"
import protin from "../../assets/icon/protin.png.png"
import unpending from "../../assets/icon/unpending.png.jpg"

export default function Services() {
  return (
 <div>
      <div className='text-5xl font-semibold text-center '>
    <h1>Why Simply Good Food</h1>
   </div>

  <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-24 mt-20 '>
  <div className='flex flex-col justify-center items-center'>
    <img src= {health} alt="" />
    <h1 className='text-xl font-semibold py-2'>Health awareness</h1>
    <p>Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.</p>
    </div>

    <div  className='flex flex-col justify-center items-center'>
        <img src= {protin} alt="" />
        <h1  className='text-xl font-semibold py-1'>More Protein</h1>
        <p>Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.</p>
    </div>

    <div  className='flex flex-col justify-center items-center'>
        <img src= {unpending} alt="" />
        <h1  className='text-xl font-semibold py-2'>Unending Variety</h1>
        <p>Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
    </div>
   </div>
  </div>
  )
}