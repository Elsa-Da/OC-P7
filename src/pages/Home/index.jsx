import './home.scss';
import Banner from '../../components/Banner/index';
import RentalList from '../../components/RentalList/index';
import ImgHome from '../../assets/img_home.png';

function Home() {
  document.title = 'Kasa | Accueil';
  return (
    <div className="home">
      <Banner heightImg="125px" backgroundImg={ImgHome}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="rentals">
        <RentalList />
      </div>
    </div>
  );
}

export default Home;
