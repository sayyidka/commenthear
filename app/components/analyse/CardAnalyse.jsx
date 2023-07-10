import React from 'react'

function CardAnalyse({ title, content }) {
    return (
        <div className="flex card bg-base-100 mb-4 sm:mb-8 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default CardAnalyse