import React from 'react';
import { ArrowLeft } from 'phosphor-react';

import './styles.css';

export const BackButton = ({ onClick }) => {
  return (
    <button className="back-btn" onClick={onClick}>
      <ArrowLeft size={13} /> Back
    </button>
  );
};
