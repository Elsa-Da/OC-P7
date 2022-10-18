import { Link } from 'react-router-dom';
import data from '../../utils/data/data';
import RentalCard from '../RentalCard';
import './rentallist.scss';

function RentalList() {
  return (
    <div className="rentallist">
      {data.map(({ title, cover, id }) => (
        <div key={`location_${id}`}>
          <Link to={`/rental/${id}`}>
            <RentalCard cover={cover} title={title} id={id} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RentalList;
