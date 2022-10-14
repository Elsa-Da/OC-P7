import { useState } from 'react';
import './collapse.scss';
import arrowOpen from '../../assets/arrow_open.png';
import arrowClose from '../../assets/arrow_close.png';

function Collapse(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div class="collapse">
      <div onClick={toggle} class="collapse__title">
        {props.label}
        {open ? (
          <img src={arrowOpen} alt="collapse open" />
        ) : (
          <img src={arrowClose} alt="collapse close" />
        )}
      </div>
      {open && <div className="collapse__content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
