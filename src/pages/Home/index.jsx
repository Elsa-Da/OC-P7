import './home.scss';
import Banner from '../../components/Banner/index';
import RentalList from '../../components/RentalList/index';
import ImgHome from '../../assets/img_home.png';
import PageTitle from '../../components/PageTitle';

function Home() {
  return window.innerWidth < 600 ? (
    <div className="home">
      <PageTitle>Accueil</PageTitle>
      <Banner backgroundImg={ImgHome} heightImg="125px">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="rentals">
        <RentalList />
      </div>
    </div>
  ) : (
    <div className="home">
      <PageTitle>Accueil</PageTitle>
      <Banner backgroundImg={ImgHome}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="rentals">
        <RentalList />
      </div>
    </div>
  );
}

export default Home;
