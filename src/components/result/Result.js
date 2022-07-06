import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';

import './result.styles.css';

//config username and email in git

export const Result = () => {
  const { name, setName, visitFrequencyPoints, optionsPoints, countryPoints } =
    useContext(AppContext);
  const navigate = useNavigate();

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
      <button
        className="startnew-btn"
        onClick={() => {
          navigate('/');
          setName('');
        }}
      >
        Start New
      </button>
    </div>
  );
};
