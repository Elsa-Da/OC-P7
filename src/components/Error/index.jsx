import './index.scss';
import { Link } from 'react-router-dom';
import useTitle from '../../utils/hooks';

function Error() {
  useTitle("Page d'erreur");
  return (
    <div className="error">
      <h1>404</h1>
      <p className="error__description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
