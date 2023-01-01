import React from 'react'
import image1 from '../assets/images/image1.jpg'

const Banner = () => {
  return (
    <div className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="overlay">
                <img src={image1} alt="banner" />
            </div>
        </div>
  )
}

export default Banner