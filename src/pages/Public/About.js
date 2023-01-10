import React from 'react'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutCollapse from "../../components/Collapse/collapseAbout.json";


const About = () => {


  return (
    <div className='wrapper about'>
      <Banner />       
      <section className="dropdown">
          {aboutCollapse.map((text, idx) => {
            return (
              <Collapse
                title={text.title}
                key={idx}
                description={text.description}
                class="dropdown_container"
              />
            );
          })}
        </section>     
      
    </div>
  )
}

export default About


