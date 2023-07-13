"use client"

import React, { useState } from 'react'
import VideoCard from './VideoCard'
import HalfSizeCard from './HalfSizeCard'
import CardAnalyse from './CardAnalyse'

function AnalysePage() {
    const [videoUrl, setVideoUrl] = useState('')
    const [data, setData] = useState(null)
    const handleInputChange = (e) => {
        setVideoUrl(e.target.value);
    };

    const getAnalyse = async () => {
        const response = await fetch('/api/analyse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl }),
        });
        const ApiData = await response.json();
        setData(ApiData);
    }

    return (
        <section className='py-18'>
            <div className='container mx-auto flex flex-col items-center max-w-3xl mt-8'>
                <h1 className='text-2xl font-bold'>Get insights from comments</h1>
                <div className="flex justify-center mt-6 mb-8 sm:mb-8">
                    <input
                        type="text"
                        value={videoUrl}
                        onChange={handleInputChange}
                        placeholder="Paste a Youtube video URL here..."
                        className="input input-bordered w-full sm:w-96"
                    />
                    <button onClick={() => getAnalyse()} className="btn btn-primary ml-2">Analyse</button>
                </div>


                {data &&
                    <div className='flex flex-col items-stretch'>
                        <VideoCard videoInfos={data.videoInfos} />
                        <CardAnalyse title="Overall Sentiment" content={data["sentimentAnalysis"]["Overall Sentiment"]} />

                        {/* Half-size cards */}
                        <div className='flew flex-wrap sm:flex sm:flex-nowrap justify-center mb-4 sm:mb-8 space-x-0 sm:space-x-4'>
                            <HalfSizeCard title="Sentiment Score" content={data["sentimentAnalysis"]["Sentiment Score"]} />
                            <HalfSizeCard title="Keyword Analysis" content={data["sentimentAnalysis"]["Keyword Analysis"]} />
                        </div>

                        {/* Viewer preferences */}
                        <CardAnalyse title="Viewer Preferences" content={data["sentimentAnalysis"]["Viewer Preferences"]} />
                        <CardAnalyse title="Areas for Improvement" content={data["sentimentAnalysis"]["Areas for Improvement"]} />
                    </div>
                }

            </div>
        </section>
    )
}

export default AnalysePage