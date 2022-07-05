import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { Check } from 'phosphor-react';
import { Button } from '../UI/Buttons/Button';
import { BackButton } from '../UI/Buttons/BackButton';

import './options.styles.css';

export const Options = () => {
  const { optionsPoints, setOptionsPoints } = useContext(AppContext);
  const [optionOneChecked, setOptionOneChecked] = useState(false);
  const [optionTwoChecked, setOptionTwoChecked] = useState(false);
  const [optionThreeChecked, setOptionThreeChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(!!optionOneChecked);
    console.log(optionsPoints);
  }, [optionOneChecked, optionTwoChecked, optionThreeChecked]);

  //Try to remove label and add label beside input
  return (
    <div className="checkbox-wrapper">
      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>QUESTION 2</div>
      <h1>Please select atleast one option</h1>
      <div className="form-wrap">
        <label className="form-control">
          <input
            type="checkbox"
            checked={optionOneChecked}
            value={optionOneChecked}
            onChange={() => {
              setOptionOneChecked(!optionOneChecked);
              if (!optionOneChecked) {
                setOptionsPoints((prevState) => prevState + 2);
              }
              if (optionOneChecked) {
                setOptionsPoints((prevState) => prevState - 2);
              }
            }}
          />
          Option 1
          <div className="check-icon">
            <Check size={24} color="#080808" />
          </div>
        </label>

        <label className="form-control">
          <input
            type="checkbox"
            checked={optionTwoChecked}
            onChange={() => {
              setOptionTwoChecked(!optionTwoChecked);
              if (!optionTwoChecked) {
                setOptionsPoints((prevState) => prevState + 2);
              }
              if (optionTwoChecked) {
                setOptionsPoints((prevState) => prevState - 2);
              }
            }}
          />
          Option 2
          <div className="check-icon">
            <Check size={24} color="#080808" />
          </div>
        </label>

        <label className="form-control">
          <input
            type="checkbox"
            checked={optionThreeChecked}
            onChange={() => {
              setOptionThreeChecked(!optionThreeChecked);
              if (!optionThreeChecked) {
                setOptionsPoints((prevState) => prevState + 2);
              }
              if (optionThreeChecked) {
                setOptionsPoints((prevState) => prevState - 2);
              }
            }}
          />
          Option 3
          <div className="check-icon">
            <Check size={24} color="#080808" />
          </div>
        </label>
      </div>
      <Button onClick={() => navigate('/country')}>next</Button>
      <BackButton onClick={() => navigate(-1)} />
    </div>
  );
};
