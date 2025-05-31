import React, { useState } from 'react'

const Hero = ({ onSearch }) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        onSearch(input.trim())
    }

    return (
        <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Stock Market Sentiment Analysis
            </h1>

            <form onSubmit={handleSubmit} className="w-full max-w-sm flex gap-2">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter a Ticker Symbol"
                className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-4 focus:ring-green-500 focus:border-green-500"
                required
            />
            <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Submit
            </button>
            </form>
        </div>
        </section>
    )
}

export default Hero
