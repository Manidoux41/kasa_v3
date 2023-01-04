import React  from 'react'

const Card = ({appart}) => {

  return (
    <div className='card'>  
        <img src={appart.cover} alt={appart.description} />      
        <h3>{appart.title}</h3>
    </div>
  )
}

export default Card