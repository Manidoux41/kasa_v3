import React from 'react'
import chevronUp from '../../assets/svg/chevron-up.svg'

const Accordion = ({children}) => {
  return (
    <div className='accordion'>
        <div className="title">{children}</div>
        <div className="chevron__up">
            <img src={chevronUp} alt="chevron down" />
        </div>
    </div>
  )
}

export default Accordion