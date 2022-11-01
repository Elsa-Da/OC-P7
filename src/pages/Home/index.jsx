import './home.scss';
import Banner from '../../components/Banner/index';
import RentalList from '../../components/RentalList/index';
import ImgHome from '../../assets/img_home.png';
import useTitle from '../../utils/hooks';

function Home() {
  useTitle('Accueil');
  //si version mobile, bannière plus petite
  let isMobile = window.innerWidth < 600;
  return (
    <div className="home">
      <Banner backgroundImg={ImgHome} heightImg={isMobile ? '125px' : '220px'}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="rentals">
        <RentalList />
      </div>
    </div>
  );
}

export default Home;
