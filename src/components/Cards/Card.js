import React, { useEffect, useState } from 'react'
import Appartements from '../../datas/appartement.json';

const Card = () => {

  const [appartement, setAppartement] = useState();

  useEffect(() => {
    fetch(Appartements)
      .then((res) => setAppartement(res.data))
  }, [])

  return (
    <div className='card'>        
              <h3>Appartement</h3>            
    </div>
  )
}

export default Card