import React from 'react'

const Cards = (props) => {
  return (
    <div className='cards'>
        {props.children}
    </div>
  )
}

export default Cards