import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { BackButton } from '../UI/Buttons/BackButton';
import { Button } from '../UI/Buttons/Button';
import { QuestionProgressBar } from '../UI/ProgressBar/QuestionProgressBar';

import './country.styles.css';

export const Country = () => {
  const { name, countryPoints, setCountryPoints } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="country-wrapper">
      <div className="country-survey-for">SURVEY FOR: {name}</div>
      <div style={{ fontWeight: 'bold' }}>QUESTION 3</div>
      <h1>Where are you from?</h1>
      <div className="select-wrapper">
        <select
          onChange={(e) => {
            if (e.target.value === 'germany') {
              setCountryPoints(3);
            }
            if (e.target.value === 'sweden') {
              setCountryPoints(5);
            }
            if (e.target.value === 'italy') {
              setCountryPoints(5);
            }
            if (e.target.value === 'spain') {
              setCountryPoints(3);
            }
          }}
        >
          <option value="" disabled selected hidden>
            Please choose your country?
          </option>
          <option value="germany">Germany</option>
          <option value="sweden">Sweden</option>
          <option value="italy">Italy</option>
          <option value="spain">Spain</option>
        </select>
      </div>
      <div>
        <Button onClick={() => navigate('/result')}>Finish</Button>
        <BackButton onClick={() => navigate(-1)} />
      </div>
      <div className="question-progress">
        <QuestionProgressBar width={100} lastQuestion />
        <div className="question-num">Question 3 out of 3</div>
      </div>
    </div>
  );
};

// - Germany: 3 Points
// - Sweden: 5 Points
// - Italy: 5 Points
// - Spain: 3 Points
