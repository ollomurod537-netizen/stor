import React, {  } from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center gap-8">
        
        <Link to="/" className="text-black text-2xl font-bold hover:text-gray-700 transition-colors whitespace-nowrap">
          Exclusive
        </Link>

        <ul className="flex gap-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-black font-medium hover:text-gray-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black font-medium hover:text-gray-700 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black font-medium hover:text-gray-700 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-black font-medium hover:text-gray-700 transition-colors">
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-black placeholder-gray-500 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors">
              <CiSearch />
            </button>
          </div>

          <button className="text-black text-xl hover:text-gray-700 transition-colors" title="Wishlist">
            <CiHeart />
          </button>
          <button className="text-black text-xl hover:text-gray-700 transition-colors" title="Cart">
            <SlBasket />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
