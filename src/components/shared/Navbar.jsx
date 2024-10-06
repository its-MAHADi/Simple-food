import React from 'react'
import logo from "../../assets/logo.png.png"

export default function Navbar() {
  return (
    <div>
       <marquee className='text-center text-xl bg-yellow-500 text-white py-2'> %%   Free shipping on all orders   %% </marquee>
      <nav className='flex items-center justify-between bg-white shadow-xl'>
        <a href="#">
            <img className='w-[150px]' src= {logo} alt="" />
        </a>
        <ul className='flex items-center gap-12 px-12'>
            <li className='hover:text-green-600'> Home </li>
            <li className='hover:text-green-600'> Our menus </li>
            <li className='hover:text-green-600'> Meal Plans </li>
            <li className='hover:text-green-600'> Catering</li>
            <li className='hover:text-green-600'> How It work  </li>
            <li className='hover:text-green-600'> Testimonials </li>
            <li className='hover:text-green-600'> FAQ  </li>
        </ul>
        <div className='flex items-center gap-8 px-5'>
          <button className='px-5 py-2 rounded hover:text-white bg-green-500 shadow-2xl'> Log In </button>
          <button className='px-5 py-2 rounded hover:text-white bg-green-500 shadow-2xl'> Sign up </button>
        </div>
      </nav>
    </div>
  )
}
