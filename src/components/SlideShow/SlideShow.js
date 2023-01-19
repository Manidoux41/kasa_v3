import React, { useState } from "react";
import SlideLeft from "../../assets/svg/slide-left.svg";
import SlideRight from "../../assets/svg/slide-right.svg";

const SlideShow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(1);


  const slideStyle = {
    width:"100%",
    height:"100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize:"cover",
    backgroundImage: `url(${pictures[currentIndex]})`,
    position:"relative" 
  }

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0
    const newIndex = isFirstPicture ? pictures.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length -1
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div style={slideStyle}    >
      <div className="slide__left">
        <img src={SlideLeft} alt="slide left" onClick={goToPrevious}/>
      </div>
      <div className="slide__right">
        <img src={SlideRight} alt="slide right" onClick={goToNext}/>
      </div>
      <div className="position">
        <p>{currentIndex + 1}/{pictures.length}</p>
      </div>
    </div>
  );
};

export default SlideShow;
