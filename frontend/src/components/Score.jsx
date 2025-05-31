import React from 'react'

/**
 * @param {number} rating      Current rating value (e.g. 3.5)
 * @param {number} maxRating   Maximum possible rating (e.g. 5)
 * @param {number} size        Width & height in px (e.g. 120)
 * @param {number} strokeWidth Thickness of the circle stroke (e.g. 8)
 * @param {string} colorClass  Tailwind text-color class (e.g. 'text-blue-500')
 */
export default function Score({
    rating,
    maxRating = 5,
    size = 120,
    strokeWidth = 8,
    colorClass = 'text-blue-500',
    }) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = Math.min(Math.max(rating / maxRating, 0), 1)
    const offset = circumference * (1 - progress)

    return (
        <section className="bg-gray-700 py-20">
            <div className="container-xl lg:container m-auto">
                <div className="bg-green-100 p-10 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Score</h2>
                        <svg
                            width={size}
                            height={size}
                            >
                            {/* Background circle */}
                            <g className="transform -rotate-90 origin-center">
                                <circle
                                    className="text-gray-500"
                                    stroke="currentColor"
                                    strokeWidth={strokeWidth}
                                    fill="transparent"
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                />

                                {/* Progress circle */}
                                <circle
                                    className={colorClass}
                                    stroke="currentColor"
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                    fill="transparent"
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                />
                            </g>
                            {/* Centered text */}
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="central"
                                textAnchor="middle"
                                className="font-semibold text-lg fill-current text-black"
                            >
                                {rating}
                            </text>
                        </svg>
                    
                </div>
                </div>
            
        </section>
    )
}
