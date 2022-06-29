import React, { useContext } from 'react';
import { AppContext } from '../../App';

export const Result = () => {
  const { name, visitFrequencyPoints } = useContext(AppContext);

  return (
    <div className="center">
      <div>{name}</div>
      <div>{visitFrequencyPoints}</div>
    </div>
  );
};
