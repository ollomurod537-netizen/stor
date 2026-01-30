import React from 'react'
import { FaApple } from "react-icons/fa";
import ipon from "./../assets/hero_endframe__cvklg0xk3w6e_large 2 (1).svg"

const Hero = () => {
  return (
    <section className="flex">
      <div className="bg-black h-96 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold flex items-center text-white gap-2"><FaApple /> iPhone 14 Series</h1>
        <h1 className="mt-2 text-5xl text-white">Up to 10% <br/>off Voucher</h1>
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Shop Now</button>
        </div>
      </div>

      <div className="relative bg-black h-96 p-8 flex items-center justify-center flex-1">
        <img src={ipon} alt="iPhone 14" className="max-h-full object-contain" />
      </div>
    </section>
  )
}

export default Hero
