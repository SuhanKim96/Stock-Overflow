import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Score from './components/Score'
import News from './components/News'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
        <div className="flex bg-gray-700 items-center justify-center gap-50">
          <Score
            rating={0.5}
            maxRating={1}
            size={200}
            strokeWidth={20}
            colorClass="text-green-500"
          />
          <News />
        </div>
    </>
  )
} 

export default App