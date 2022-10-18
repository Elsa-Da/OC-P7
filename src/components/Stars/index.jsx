import './stars.scss';
import StarOn from '../../assets/star_on.png';
import StarOff from '../../assets/star_off.png';

function Rating(rental) {
  switch (rental.value) {
    case 1:
      return (
        <p>
          <img src={StarOn} alt="1/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="1/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="1/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="1/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="1/5 étoiles" className="rental__star" />
        </p>
      );
    case 2:
      return (
        <p>
          <img src={StarOn} alt="2/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="2/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="2/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="2/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="2/5 étoiles" className="rental__star" />
        </p>
      );
    case 3:
      return (
        <p>
          <img src={StarOn} alt="3/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="3/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="3/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="3/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="3/5 étoiles" className="rental__star" />
        </p>
      );
    case 4:
      return (
        <p>
          <img src={StarOn} alt="4/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="4/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="4/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="4/5 étoiles" className="rental__star" />
          <img src={StarOff} alt="4/5 étoiles" className="rental__star" />
        </p>
      );
    case 5:
      return (
        <p>
          <img src={StarOn} alt="5/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="5/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="5/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="5/5 étoiles" className="rental__star" />
          <img src={StarOn} alt="5/5 étoiles" className="rental__star" />
        </p>
      );
  }
}
function Stars(props) {
  let rating = parseInt(props.children);

  console.log(rating);
  return (
    <div>
      <Rating value={rating} />
    </div>
  );
}

export default Stars;
