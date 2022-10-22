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
    <div className="collapse">
      <div
        onClick={toggle}
        className="collapse__title"
        style={{
          width: `${props.widthCollapse}`,
          margin: `${props.marginCollapse}`,
        }}
      >
        {props.label}
        {open ? (
          <img src={arrowOpen} alt="collapse open" />
        ) : (
          <img src={arrowClose} alt="collapse close" />
        )}
      </div>
      {open && (
        <div
          className="collapse__content"
          style={{
            width: `${props.widthCollapseContent}`,
          }}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
