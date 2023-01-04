import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../datas/appartement.json";


const Logements = () => {
  
  const { logementId } = useParams();
  const appart = data.find((appart) => appart.id === logementId);
  const {title, location} = appart;

  return (
    
    <div className="wrapper logements">
    <h1>{title}</h1>
      <p>{location}</p>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
    </div>
      
    
    
  )
}

export default Logements