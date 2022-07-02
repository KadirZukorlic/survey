import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

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
      <div>Question 1</div>
      <h1>How often do you visit this website?</h1>
      <div className="row">
        {questions.map((question) => (
          <div className="radioButtons">
            <input
              type={question.type}
              value={question.value}
              checked={selectedVisitFrequency === question.value}
              onChange={onChangeHandler}
            />
            {question.label}
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/options')}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
