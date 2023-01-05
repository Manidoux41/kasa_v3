import React from 'react'
import down from '../../assets/svg/down.svg'

const Dropdown = () => {

  const handleClick = () => {
    const downImg = document.querySelector('.imgDown')
    downImg.style.transform = 'rotate(-180deg)'  
  }

  return (
    <div className='dropdown'>  
        <h4>Service</h4>
        <img src={down} alt="down" onClick={handleClick} className="imgDown" />
    </div>
  )
}

export default Dropdown