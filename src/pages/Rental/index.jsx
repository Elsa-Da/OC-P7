import './rental.scss';
import { useParams, Navigate } from 'react-router-dom';
import data from '../../utils/data/data';
import Carousel from '../../components/Carousel/index';
import Tag from '../../components/Tag/index';
import Stars from '../../components/Stars/index';
import Collapse from '../../components/Collapse';

function Rental() {
  const params = useParams();
  const selectedRental = data.find((rental) => rental.id === params.id);
  if (!selectedRental) {
    return <Navigate replace to="/error" />;
  }

  const tags = selectedRental.tags;
  const equipments = selectedRental.equipments;
  const pictures = selectedRental.pictures;
  document.title = `Kasa | ${selectedRental.title}`;

  return (
    <div className="rental">
      <Carousel>
        {pictures.map((picture, index) => (
          <img
            key={`carouselPicture_${index}`}
            src={picture}
            alt={`la location ${selectedRental.title}`}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </Carousel>

      <div className="rental__head">
        <div className="rental__head--info">
          <h1>{selectedRental.title}</h1>
          <h2>{selectedRental.location}</h2>
          {tags.map((tag, index) => (
            <Tag key={`tag_${index}`}>{tag}</Tag>
          ))}
        </div>

        <div className="rental__head--host">
          <div className="host">
            <p className="host__name">{selectedRental.host.name}</p>
            <img
              src={selectedRental.host.picture}
              alt={`L'hôte ${selectedRental.host.name}`}
              className="host__picture"
            />
          </div>
          <Stars>{selectedRental.rating}</Stars>
        </div>
      </div>

      <div className="rental__body">
        <Collapse
          label="Description"
          widthCollapse="82%"
          widthCollapseContent="82%"
        >
          <p>{selectedRental.description}</p>
        </Collapse>
        <Collapse
          label="Équipements"
          widthCollapse="82%"
          widthCollapseContent="82%"
        >
          {equipments.map((equipment, index) => (
            <ul key={`equipment_${index}`}>
              <li>{equipment}</li>
            </ul>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default Rental;
