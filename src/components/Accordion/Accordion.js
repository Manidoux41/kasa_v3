import chevronUp from "../../assets/svg/chevron-up.svg";
import React, { useState } from "react";

const Accordion = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(true);

  const displayContent = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div key={id} className="accordion">
        <div className="accordion__header">
          <h3>{title}</h3>
          <img
            src={chevronUp}
            alt=""
            onClick={displayContent}
            className={isActive ? "rotate" : ""}
          />
        </div>
        {!isActive ? (
          <div className="accordion__contentDisplay">
            <p>{content}</p>
          </div>
        ) : (
          <div className="accordion__content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
