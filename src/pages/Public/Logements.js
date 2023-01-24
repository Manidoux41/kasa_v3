import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import Rating from "../../components/Rating/Rating";
import SlideShow from "../../components/SlideShow/SlideShow";
import data from "../../datas/appartement.json";

const Logements = ({ children }) => {
  const { logementId } = useParams();
  const appart = data.find((appart) => appart.id === logementId);
  const {
    title,
    location,
    pictures,
    tags,
    host,
    rating,
    equipments,
    description,
  } = appart;

  const containerStyles = {
    with: "100%",
    height: "415px",
    margin: "0 auto",
  };

  const accordionInfo = [{ name: "Description" }, { name: "Equipments" }];

  return (
    <div className="wrapper logements">
      <div style={containerStyles}>
        <SlideShow pictures={pictures} />
      </div>
      <div className="logementHeader">
        <div className="logementInfo">
          <h1>{title}</h1>
          <p>{location}</p>
          <ul className="tag">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="proprioInfo">
          <div className="nameAvatar">
            <h3 className="nomProprio">{host.name}</h3>
            <div className="avatarProprio">
              <img src={host.picture} alt="" />
            </div>
          </div>
          <div className="stars">
            <Rating rate={rating} />
          </div>
        </div>
      </div>
      <div className="description">
              <Accordion title="Description" content={description} />
              <Accordion title="Equipements" content={equipments.map((equi)=> {
                return(
                  <li>{equi}</li>
                )
              })} />
      </div> 
    </div>
  );
};

export default Logements;
