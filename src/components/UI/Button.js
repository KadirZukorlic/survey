import React from 'react';
import { ArrowCircleRight } from 'phosphor-react';

import './styles.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children} <ArrowCircleRight width={32} />
    </button>
  );
};
