import './footer.scss';
import Logo from '../../assets/logo_footer.png';

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
