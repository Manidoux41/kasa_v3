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
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {   
    const intervalId = setInterval(async () =>{
      await fetch('/data/appartement.json')
      .then(response => response.json())
      .then(jsonData => {
        setApparts(jsonData)
        setIsLoading(true)
        clearInterval(intervalId)
      })
      .catch(error => {
      console.error(error)
      setIsLoading(false);
      clearInterval(intervalId)
    })
    }, 2000) 
    return () => {
      clearInterval(intervalId)
    }
  }, [apparts])
  
    return isLoading ? (
      <div className='cards'>
          {apparts.map((appart) => (
          <Card key={appart.id} appart={appart} />
        ))}
      </div>
    ) : (
      <div className='cards'>
        <p>Chargement des données en cours ...</p>
      </div>
    )
  }

export default Cards