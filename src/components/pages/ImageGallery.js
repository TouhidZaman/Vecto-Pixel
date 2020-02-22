import React from 'react'
import './ImageGallery.css'

export default function ImageGallery() {
    return (
        <div className="image-gallery-container">
            <h2 className="image-gallery-heading">Image Gallery</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className="image-gallery">
                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>
                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>

                <div className="image-item">
                    <img src="http://unsplash.it/400/250/?random" alt="Reload" />
                </div>
               
            </div>
        </div>
    )
}