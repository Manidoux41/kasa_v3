import React from 'react'
import Card from './Card'
import data from '../../datas/appartement.json';
import { useState, useEffect } from 'react';



const Cards = () => {  

const [apparts, setApparts] = useState([])

useEffect(() => {
  setApparts(data)
}, [apparts])

  return (
    <div className='cards'>
        {apparts.map((appart) => (
        <Card key={appart.id} appart={appart} />
      ))}
    </div>
  )
}

export default Cards