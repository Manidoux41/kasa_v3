import React from 'react'
import Card from './Card'
import data from '../../datas/appartement.json';


const Cards = () => {  

  return (
    <div className='cards'>
        {data.map((appart, index) => (
        <Card key={index} appart={appart} />
      ))}
    </div>
  )
}

export default Cards