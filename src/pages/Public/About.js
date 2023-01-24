import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner';
import aboutData from '../../datas/aboutData';


const About = () => {

  
  const index = 2

  

  return (
    <div className='wrapper about'>
      <Banner imgSource={`./image${index}.jpg`}/>       
      <div className="about__container">
        {aboutData.map((data, index) => {
          return <Accordion key={index} data={data} />;
        })}
      </div> 
      
    </div>
  )
}

export default About


