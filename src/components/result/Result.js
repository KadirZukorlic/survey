import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

export const Result = () => {
  const { name, visitFrequencyPoints, optionsPoints, countryPoints } =
    useContext(AppContext);

  const calculateTotalPoints = () => {
    // score points / 0.16 is equal to precentage for progress bar
    return visitFrequencyPoints + optionsPoints + countryPoints;
  };

  useEffect(() => {
    console.log(calculateTotalPoints());
  }, []);

  return (
    <div className="center" style={{ fontSize: '2rem' }}>
      <div>{name}</div>
      <div>{calculateTotalPoints()}</div>
    </div>
  );
};
