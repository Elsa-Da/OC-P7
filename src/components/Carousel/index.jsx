import { useState, useEffect } from 'react';
import './carousel.scss';
import leftArrow from '../../assets/left_arrow.png';
import rightArrow from '../../assets/right_arrow.png';

function Carousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const picturesNumber = length - 1;

  const next = () => {
    if (currentIndex < picturesNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex === picturesNumber) {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(picturesNumber);
    }
  };

  return (
    <div className="carousel">
      <img
        onClick={prev}
        className="carousel__leftarrow"
        src={leftArrow}
        alt="Flèche gauche carousel"
      />
      <div className="carousel__content">
        <div
          className="carousel__content--img"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
        <p className="carousel__content--count">
          {currentIndex + 1}/{picturesNumber + 1}
        </p>
      </div>
      <img
        onClick={next}
        className="carousel__rightarrow"
        src={rightArrow}
        alt="Flèche droite carousel"
      />
    </div>
  );
}
export default Carousel;
