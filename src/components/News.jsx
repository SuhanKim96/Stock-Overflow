import React from 'react'
import newsData from '../jobs.json'  // adjust path if needed

const News = ({ ticker }) => {
    const symbol = ticker.trim().toUpperCase()
    const articles = newsData[symbol] || []

    return (
        <section className="bg-gray-700 py-6 w-full max-w-xl">
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
            News for {symbol || '...'}
            </h2>

            {!symbol && (
            <p className="text-gray-600">Please enter a ticker above.</p>
            )}

            {symbol && articles.length === 0 && (
            <p className="text-red-600">No news found for “{symbol}”.</p>
            )}

            {articles.length > 0 && (
            <ul className="space-y-2">
                {articles.map((item, idx) => (
                <li key={idx} className="bg-white p-3 rounded">
                    <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                    {item.headline}
                    </a>
                    <div className="text-sm text-gray-500">
                    {item.date} — {item.analysis} — Score: {item.score}
                    </div>
                </li>
                ))}
            </ul>
            )}
        </div>
        </section>
    )
}

export default News
