import React from 'react'

function VideoCard({ videoInfos }) {
    return (
        <div className="flex card sm:card-side bg-primary mb-4 sm:mb-8 shadow-xl">
            <figure className="w-full sm:w-auto">
                <img className='w-full object-cover sm:w-auto sm:h-full' src={videoInfos.thumbnail} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{videoInfos.video_title}</h2>
                <p>{videoInfos.channel_title}</p>
                <p>{videoInfos.view_count} views</p>
            </div>
        </div>

    )
}

export default VideoCard