import { Link } from 'react-router-dom';
import data from '../../utils/data/data';
import RentalCard from '../RentalCard';
import './rentallist.scss';

function RentalList() {
  return (
    <div class="rentallist">
      {data.map(({ title, cover, id }) => (
        <Link to={`/rental/${id}`}>
          <RentalCard cover={cover} title={title} id={id} />
        </Link>
      ))}
    </div>
  );
}

export default RentalList;
