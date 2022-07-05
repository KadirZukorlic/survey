import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Button } from '../UI/Buttons/Button';
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';

import './result.styles.css';

export const Result = () => {
  const { name, visitFrequencyPoints, optionsPoints, countryPoints } =
    useContext(AppContext);

  let totalPoints;

  const calculateTotalPoints = () => {
    const result = visitFrequencyPoints + optionsPoints + countryPoints;
    totalPoints = result / 0.16;
    return totalPoints;
  };

  return (
    <div className="result-wrapper">
      <div style={{ marginBottom: '10px' }}>RESULT</div>
      <h1>Your Score</h1>
      <div
        style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '20px' }}
      >
        {name}
      </div>
      <div style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        {calculateTotalPoints()}
      </div>
      <div style={{ fontSize: '14px', marginTop: '-10px' }}>points</div>
      <div style={{ margin: '10px 0 30px 0' }}>
        <ProgressBar points={totalPoints} />
      </div>
      <Button>Start New</Button>
    </div>
  );
};
