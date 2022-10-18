import { NavLink } from 'react-router-dom';
import './header.scss';

import Logo from '../../assets/logo_header.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo Kasa" />
      <nav className="header__nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
