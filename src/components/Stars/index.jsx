import './stars.scss';
import { ReactComponent as Star } from '../../assets/starry.svg';

function Stars(props) {
  let rentalRating = parseInt(props.children);
  const starArray = [...Array(5).keys()].map((i) => i + 1);

  //Renvoi 5 étoiles & selon le rating pleines ou vides
  const Rating = ({ rating }) =>
    starArray.map((i) => (
      <Star
        fill="#e3e3e3"
        key={`${i}`}
        className={`${rating >= i ? 'on' : 'off'}`}
      />
    ));

  return (
    <div className="star" data-testid="etoile">
      <Rating rating={rentalRating} />
    </div>
  );
}

export default Stars;
