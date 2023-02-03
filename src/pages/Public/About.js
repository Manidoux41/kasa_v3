import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Banner from "../../components/Banner/Banner";
import aboutData from "../../datas/aboutData";

const About = () => {
  const index = 2;
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    setTitle('')
  },[])

  return (
    <div className="wrapper about">
      <Banner imgSource={`./image${index}.jpg`} title={title}/>
      <div className="about__container">
        {aboutData.map((data, index) => {
          return (
            <Accordion key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
};

export default About;
