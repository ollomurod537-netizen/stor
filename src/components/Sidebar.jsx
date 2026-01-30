import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'

const Sidebar = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center justify-between cursor-pointer group">
            <span className="text-gray-800 font-medium group-hover:text-gray-600 transition-colors">
              {category}
            </span>
            <MdOutlineChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
