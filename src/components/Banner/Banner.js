import React from 'react'
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
const Banner = () => {

  const image = [
    {
    src: image1,
    width: '100%',
    alt: 'image1'
  },
  {
    src: image2,
    width: '100%',
    alt: 'image2'
  }
]

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