import React  from 'react'
import { Link } from 'react-router-dom'

const Card = ({appart}) => {

  return (    
      <Link className='card' to={'../logements/'+appart.id} >  
        <img src={appart.cover} alt={appart.description} />      
        <h3>{appart.title}</h3> 
      </Link>    
    
  )
}

export default Card