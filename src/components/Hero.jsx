import React from 'react'

const Hero = () => {
    return (
        <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
            <h1
                className="text-4xl font-bold text-white sm:text-5xl md:text-5xl">
                Stock Market Sentiment Analysis
            </h1>
            <input type="text" id="ticker_input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter a Ticker Symbol" required />    
            <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-800">Submit</button>
        </div>
        </section>
    )
}

export default Hero