import React from 'react'
import gallary from "../../../assets/image/gallery.png"
import { ArrowUpRight } from 'lucide-react'
import circle from "../../../assets/image/circle.png"

function Gallary() {
  return (
    <div className='mt-24'>
        <div className="w-full bg-[rgb(196,196,196)] h-[559px] grid md:grid-cols-2 md:gap-5 md:px-0">
      <div className=" flex flex-col justify-center">
         <img src={circle} alt="" className="w-[601px] absolute" />
        <div className="relative md:left-28 p-5">
          <h1 className="md:w-2/3 md:text-3xl tracking-wide font-semibold leading-snug text-black ">
            {" "}
            Make daily meals healthy and moderate
          </h1>
          <p className="text-green-600 text-base">
            {" "}
            Ingredients are naturally rich and full of taste.
          </p>
          <button className=" py-2 px-2 mt-2 bg-[#6EA963] rounded-md md:w-1/3 w-1/2 text-white flex items-center gap-1">
            <span>Expolor Menu</span>
            <ArrowUpRight className="font-semibold" />
          </button>
        </div>
      </div>
      <div className="">
        <img src={gallary} alt="" className="h-full object-cover w-[779px]" />
      </div>
    </div>
    </div>
  )
}

export default Gallary
