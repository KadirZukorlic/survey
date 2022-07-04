import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { Button } from '../UI/Button';
import { BackButton } from '../UI/BackButton';
import { Check } from 'phosphor-react';

import './visitFrequency.styles.css';

const questions = [
  { label: 'Often', type: 'radio', value: 'Often' },
  { label: 'Rarely', type: 'radio', value: 'Rarely' },
  { label: 'Never', type: 'radio', value: 'Never' },
];

export const VisitFrequency = () => {
  const {
    selectedVisitFrequency,
    setSelectedVisitFrequency,
    setVisitFrequencyPoints,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setSelectedVisitFrequency(e.target.value);

    if (e.target.value === 'Often') {
      setVisitFrequencyPoints(5);
    } else if (e.target.value === 'Rarely') {
      setVisitFrequencyPoints(3);
    } else {
      setVisitFrequencyPoints(0);
    }
  };

  return (
    <div className="visit-content">
      <div
        style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}
      >
        Question 1
      </div>
      <h1>How often do you visit this website?</h1>
      <div className="row">
        {questions.map((question) => (
          <label className="form-control">
            <input
              type={question.type}
              value={question.value}
              checked={selectedVisitFrequency === question.value}
              onChange={onChangeHandler}
            />
            {question.label}
            <div className="radioIcon">
              <Check size={20} color="#080808" />
            </div>
          </label>
        ))}
      </div>
      <div>
        <Button onClick={() => navigate('/options')}>Next</Button>
        <BackButton onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};
