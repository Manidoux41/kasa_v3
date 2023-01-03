import React  from 'react'

const Card = (props) => {

  return (
    <div className='card'>  
        <img src={props.cover} alt={props.description} />      
        <h3>{props.title}</h3>
    </div>
  )
}

export default Card