import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

export const Country = () => {
  const [country, setCountry] = useState('');
  const { countryPoints, setCountryPoints } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(countryPoints);
  }, [countryPoints]);

  return (
    <Fragment>
      <h3>Question 3</h3>
      <h1>Where are You from?</h1>
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
      <button onClick={() => navigate('/result')}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </Fragment>
  );
};

// - Germany: 3 Points
// - Sweden: 5 Points
// - Italy: 5 Points
// - Spain: 3 Points
