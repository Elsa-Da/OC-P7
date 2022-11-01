import { useState } from 'react';
import './carousel.scss';
import leftArrow from '../../assets/left_arrow.png';
import rightArrow from '../../assets/right_arrow.png';

function Carousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const picturesNumber = length - 1;

  //Lorsqu'on clique sur la fleche suivante, nous renvoie la prochaine photo ou revient au début
  const next = () => {
    if (currentIndex < picturesNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex === picturesNumber) {
      setCurrentIndex(0);
    }
    return currentIndex;
  };

  //Lorsqu'on clique sur la fleche précédente, nous renvoie la photo précédente ou revient à la fin
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(picturesNumber);
    }
    return currentIndex;
  };

  // S'il n'y a qu'une seule photo ..
  let isOne = false;
  if (length === 1) {
    isOne = true;
  }

  return (
    <div className="carousel">
      <img
        onClick={prev}
        className={isOne ? 'carouselNone' : 'carousel__leftarrow'}
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
        <p className={isOne ? 'carouselNone' : 'carousel__content--count'}>
          {currentIndex + 1}/{picturesNumber + 1}
        </p>
      </div>
      <img
        data-testid="arrowNext"
        onClick={next}
        className={isOne ? 'carouselNone' : 'carousel__rightarrow'}
        src={rightArrow}
        alt="Flèche droite carousel"
      />
    </div>
  );
}

export default Carousel;
