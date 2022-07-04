import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { BackButton } from '../UI/BackButton';
import { Button } from '../UI/Button';

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
      <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>QUESTION THREE</h3>
      <h1>Where are you from?</h1>
      <div className="select">
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
          <option value="germany">Germany</option>
          <option value="sweden">Sweden</option>
          <option value="italy">Italy</option>
          <option value="spain">Spain</option>
        </select>
      </div>
      <div>
        <Button onClick={() => navigate('/result')}>Next</Button>
        <BackButton onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

// - Germany: 3 Points
// - Sweden: 5 Points
// - Italy: 5 Points
// - Spain: 3 Points
