import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner'



const About = () => {

  return (
    <div className='wrapper about'>
      <Banner />       
      <section className="dropdown">
          <Accordion />
        </section>     
      
    </div>
  )
}

export default About


