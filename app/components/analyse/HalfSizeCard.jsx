import React from 'react'

function HalfSizeCard({ title, content }) {

    if (title === 'Sentiment Score') {
        return (
            <div className="w-full mb-4 sm:mb-0 sm:w-1/2 flex flex-col card bg-secondary shadow-xl h-48">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{content} %</p>
                </div>
            </div>
        )
    }

    // Keyword Analysis
    return (
        <div className="w-full mb-4 sm:mb-0 sm:w-1/2 flex flex-col card bg-accent shadow-xl h-48">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content.join(", ")}</p>
            </div>
        </div>
    )


}

export default HalfSizeCard