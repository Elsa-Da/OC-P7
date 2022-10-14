import { NavLink } from 'react-router-dom';
import './header.scss';

import Logo from '../../assets/logo_header.png';

function Header() {
  return (
    <div class="header">
      <img src={Logo} alt="Logo Kasa" />
      <nav class="header__nav">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          À Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
