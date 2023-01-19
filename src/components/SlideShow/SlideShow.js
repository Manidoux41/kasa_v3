import React from "react";
import SlideLeft from "../../assets/svg/slide-left.svg";
import SlideRight from "../../assets/svg/slide-right.svg";

const SlideShow = () => {
  return (
    <div className="slide__show">
      <div className="slide__gallery"></div>
      <div className="slide__left">
        <img src={SlideLeft} alt="slide left" />
      </div>
      <div className="slide__right">
        <img src={SlideRight} alt="slide right" />
      </div>
    </div>
  );
};

export default SlideShow;
