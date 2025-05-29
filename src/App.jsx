import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Score from './components/Score'
import News from './components/News'
import newsData from './jobs.json'

const App = () => {
  const [ticker, setTicker] = useState('')

  const symbol = ticker.trim().toUpperCase()
  const articles = symbol ? (newsData[symbol] || []) : []

  const averageScore =
    articles.length > 0
      ? articles.reduce((sum, item) => sum + item.score, 0) / articles.length
      : 0

  return (
    <>
      <Navbar />
      
      <Hero onSearch={setTicker} />

      <div className="flex bg-gray-700 items-center justify-center gap-10 py-10">
        
        <Score
          rating={Number(averageScore.toFixed(2))}
          maxRating={1}
          size={200}
          strokeWidth={20}
          colorClass="text-green-500"
        />
        
        <News ticker={ticker} />
      </div>
    </>
  )
}

export default App
