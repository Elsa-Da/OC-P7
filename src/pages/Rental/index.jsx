import './rental.scss';
import { createPath, useParams } from 'react-router-dom';
import data from '../../utils/data/data';
import Carousel from '../../components/Carousel/index';
import Tag from '../../components/Tag/index';
import CollapseRental from '../../components/CollapseRental/index';

function Rental() {
  const params = useParams();
  const selectedRental = data.find((rental) => rental.id === params.id);
  const tags = selectedRental.tags;
  const equipments = selectedRental.equipments;

  return (
    <div class="rental">
      <Carousel pic={selectedRental.pictures} />

      <div class="rental__head">
        <div class="rental__head--info">
          <h1>{selectedRental.title}</h1>
          <h2>{selectedRental.location}</h2>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>

        <div class="rental__head--host">
          <div class="host">
            <p class="host__name">{selectedRental.host.name}</p>
            <img
              src={selectedRental.host.picture}
              alt="photo de profil du locataire"
              class="host__picture"
            />
          </div>
          <p>ici les étoiles</p>
        </div>
      </div>

      <div class="rental__body">
        <CollapseRental label="Description">
          <p>{selectedRental.description}</p>
        </CollapseRental>
        <CollapseRental label="Équipements">
          <p>
            {equipments.map((equipment) => (
              <ul>
                <li>{equipment}</li>
              </ul>
            ))}
          </p>
        </CollapseRental>
      </div>
    </div>
  );
}

export default Rental;
