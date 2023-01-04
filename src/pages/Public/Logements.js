import React from 'react'
import { useParams } from 'react-router-dom'

const Logements = () => {
  
  const { appartId } = useParams()


  return (
    <div className='wrapper logements'>
      <h2>Logements</h2>
      <br />
      <h3>{JSON.stringify(appartId)}</h3>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p>test</p>
    </div>
  )
}

export default Logements