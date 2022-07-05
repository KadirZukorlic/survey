import React from 'react';
import { ArrowCircleRight } from 'phosphor-react';

import './styles.css';

export const Button = ({ children, onClick, showIcon = true }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children} {showIcon && <ArrowCircleRight width={32} />}
    </button>
  );
};
