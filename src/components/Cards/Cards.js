import React from 'react'
import Card from './Card'
import data from '../../datas/appartement.json';


const Cards = () => {
  
  return (
    <div className='cards'>
        {data.map(item => (
        <Card key={item.id} title={item.title} cover={item.cover} description={item.description} />
      ))}
    </div>
  )
}

export default Cards