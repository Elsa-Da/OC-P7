import './index.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div class="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" class="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
