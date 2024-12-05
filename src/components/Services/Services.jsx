import React from 'react'
import health from "../../assets/icon/health.png.jpg"
 import protin from "../../assets/icon/protin.png.png"
 import unpending from "../../assets/icon/unpending.png.png"

export default function Services() {
  return (
 <div>
      <div className='text-5xl font-semibold text-center justify-center '>
    <h1>Why Simply Good Food</h1>
   </div>
  
  <div className='grid grid-cols-3 text-center gap-14 mt-20'>
    <div className='space-y-5 flex flex-col items-center justify-center'>
      <img src= {health} alt="" />
      <h1 className='text-3xl font-semibold'>Health awareness</h1>
      <p>Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.</p>
    </div>

    <div className='space-y-5 flex flex-col items-center justify-center '>
      <img src= {protin} alt="" />
      <h1 className='text-3xl font-semibold'>More Protein</h1>
      <p>Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.</p>
    </div>

    <div className='space-y-5 flex flex-col items-center justify-center'>
      <img src= {unpending} alt="" />
      <h1 className='text-3xl font-semibold'>Unending Variety</h1>
      <p>Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
    </div>
  </div>
 
  </div>
  )
}







{/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-24 mt-20 '>
<div className='flex flex-col justify-center items-center'>
  <img src= {health} alt="" />
  <h1 className='text-xl font-semibold py-2'>Health awareness</h1>
  <p>Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.</p>
  </div>

  <div  className='flex flex-col justify-center items-center'>
      <img src= {protin} alt="" />
      <h1  className='text-xl font-semibold py-2'>More Protein</h1>
      <p>Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.</p>
  </div>

  <div  className='flex flex-col justify-center items-center'>
      <img src= {unpending} alt="" />
      <h1  className='text-xl font-semibold py-2'>Unending Variety</h1>
      <p>Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
  </div>
 </div> */}