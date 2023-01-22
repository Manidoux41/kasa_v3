import React from "react";
import chevronUp from "../../assets/svg/chevron-up.svg";

const Accordion = ({ children, props }) => {
  return (
    <>
      <div className="accordion">
        <div className="title">{children}</div>
        <div className="chevron__up">
          <img src={chevronUp} alt="chevron down" />
        </div>
      </div>
      <div className="accordion__content">
        <div className="title">{props}</div>
      </div>
    </>
  );
};

export default Accordion;
