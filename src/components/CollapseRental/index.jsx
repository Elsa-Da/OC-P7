import { useState } from 'react';
import './collapserental.scss';
import arrowOpen from '../../assets/arrow_open.png';
import arrowClose from '../../assets/arrow_close.png';

function CollapseRental(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="collapse__rental">
      <div onClick={toggle} className="collapse__rental--title">
        {props.label}
        {open ? (
          <img src={arrowOpen} alt="collapse open" />
        ) : (
          <img src={arrowClose} alt="collapse close" />
        )}
      </div>
      {open && (
        <div className="collapse__rental--content">{props.children}</div>
      )}
    </div>
  );
}

export default CollapseRental;
