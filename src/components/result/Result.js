import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

export const Result = () => {
  const { name, visitFrequencyPoints, optionsPoints } = useContext(AppContext);

  const calculateTotalPoints = () => {
    return visitFrequencyPoints + optionsPoints;
  };

  useEffect(() => {
    console.log(calculatePoints());
  }, []);

  return (
    <div className="center">
      <div>{name}</div>
      <div>{visitFrequencyPoints}</div>
      <div>{calculateTotalPoints()}</div>
    </div>
  );
};
