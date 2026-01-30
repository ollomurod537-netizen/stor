import React from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 py-8 px-8">
          <Sidebar />
          <Hero />
          
        </div>
      </div>
    </div>
  )
}

export default Home
