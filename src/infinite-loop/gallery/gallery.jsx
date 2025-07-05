import React from 'react'
import './gallery.css'

const title = 'Gallery'
const Gallery = ({images, lorem}) => {
  return (
    <div className='gallery'>
      <div className='content'>
        <h1>{title}</h1>
      <p className='lorem'>{lorem}</p>
      </div>
      <div className='images'>
        {images.map((item) => (
          <img src={item.src} alt="imageGallery" className='image'/>
        ))}
      </div>
    </div>
  )
}

export default Gallery