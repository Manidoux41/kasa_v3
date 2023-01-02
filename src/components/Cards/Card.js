import React from 'react'
import Appartements from '../../datas/appartement.json';

const Card = () => {

  return (
    <div className='card'>
        {
          Appartements.map(appartement => {
            return(
              <h3>{appartement.title}</h3>
            )
          })
        }
    </div>
  )
}

export default Card