import React from 'react'
import Card from './Card'
import data from '../../datas/appartement.json';


const Cards = () => {  

  return (
    <div className='cards'>
        {data.map((appart) => (
        <Card key={appart.id} appart={appart} />
      ))}
    </div>
  )
}

export default Cards