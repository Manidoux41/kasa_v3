import React from 'react'

const Banner = ({imgSource}) => {
  return (
    <div className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="overlay">
                <img src={imgSource} alt="banner" />
            </div>
        </div>
  )
}

export default Banner