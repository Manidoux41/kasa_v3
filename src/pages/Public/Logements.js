import React from "react";
import { useParams } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import data from "../../datas/appartement.json";

const Logements = () => {
  const { logementId } = useParams();
  const appart = data.find((appart) => appart.id === logementId);
  const { title, location } = appart;

  return (
    <div className="wrapper logements">
      <SlideShow />
      <div className="logementHeader">
        <div className="logementInfo">
          <h1>{title}</h1>
          <p>{location}</p>
          <ul className="tag">
            <li>Cosy</li>
            <li>Canal</li>
            <li>Paris 10</li>
          </ul>
        </div>
        <div className="proprioInfo">
          <div className="nameAvatar">
            <h3 className="nomProprio">Alex Dumas</h3>
            <div className="avatarProprio">
              
            </div>
          </div>
          <div className="stars">
            
          </div>
      </div>
      </div>
      <div className="description">

      </div>      
    </div>
  );
};

export default Logements;
