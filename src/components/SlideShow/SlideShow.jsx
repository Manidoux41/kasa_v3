import SlideLeft from "../../assets/svg/slide-left.svg";
import SlideRight from "../../assets/svg/slide-right.svg";
import React, { useState, useEffect } from "react";

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "100% 0",
    backgroundSize: "cover",
    backgroundImage: `url(${pictures[currentImageIndex]})`,
    position: "absolute",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    }, 4800);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, pictures]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex + pictures.length - 1) % pictures.length
    );
    setLoading(true);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    setLoading(true);
  };

  return (
    <>
      {loading && <p></p>}
      <div className="slide-container">
        <div
          style={slideStyle}
          className="image-container"
          key={currentImageIndex}
          onLoad={handleImageLoad}
          onError={handleImageLoad}
        >
          <div className="slide__left">
            <img
              src={SlideLeft}
              alt="slide left"
              onClick={handlePrevClick}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="slide__right">
            <img
              src={SlideRight}
              alt="slide right"
              onClick={handleNextClick}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="position">
            <p>
              {currentImageIndex + 1}/{pictures.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
