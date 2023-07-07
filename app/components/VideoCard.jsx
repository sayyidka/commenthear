import React from 'react'

function VideoCard() {
    return (
        <div className="flex card sm:card-side bg-primary mb-4 sm:mb-8 shadow-xl">
            <figure>
                <img className='object cover sm:h-full sm:w-80' src="https://images.pexels.com/photos/17379311/pexels-photo-17379311/free-photo-of-bois-lumineux-aube-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Bulletin N°141. Pensée magique gamelinique, fanatisme : Attali-BHL, Kaliningrad.06.07.2023.</h2>
                <p>STRATPOL</p>
                <p>24k views</p>
            </div>
        </div>
    )
}

export default VideoCard