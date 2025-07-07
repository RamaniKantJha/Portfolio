import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="popup__overlay" onClick={onClose}>
      <div className="popup__content" onClick={e => e.stopPropagation()}>
        <button className="popup__close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
