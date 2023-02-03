import React from 'react'
import Card from './Card'
//import data from '../../datas/appartement.json';
import { useState, useEffect } from 'react';



// const Cards = () => {  

// const [apparts, setApparts] = useState([])

// useEffect(() => {
//   setApparts(data)
// }, [apparts])

//   return (
//     <div className='cards'>
//         {apparts.map((appart) => (
//         <Card key={appart.id} appart={appart} />
//       ))}
//     </div>
//   )
// }

const Cards = () => {  

  const [apparts, setApparts] = useState([])
  
  useEffect(() => {
    try {
      fetch('/data/appartement.json')
      .then(response => response.json())
      .then(jsonData => setApparts(jsonData))
    } catch(error) {
      console.error(error)
    }
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