import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner';



const About = () => {

  
  const index = 2

  return (
    <div className='wrapper about'>
      <Banner imgSource={`./image${index}.jpg`}/>       
      <section className="dropdown">
          <Accordion />
        </section>     
      
    </div>
  )
}

export default About


