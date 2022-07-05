import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { BackButton } from '../UI/Buttons/BackButton';
import { Button } from '../UI/Buttons/Button';

import './country.styles.css';

export const Country = () => {
  const [country, setCountry] = useState('');
  const { countryPoints, setCountryPoints } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(countryPoints);
  }, [countryPoints]);

  return (
    <div className="country-wrapper">
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
            console.log(e.target.value);
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
    </div>
  );
};

// - Germany: 3 Points
// - Sweden: 5 Points
// - Italy: 5 Points
// - Spain: 3 Points
