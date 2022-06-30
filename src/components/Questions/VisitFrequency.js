import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

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
    <div>
      <div>Question 1</div>
      <h1>How often do you visit this website?</h1>
      {questions.map((question) => (
        <label key={question.label}>
          <input
            type={question.type}
            value={question.value}
            checked={selectedVisitFrequency === question.value}
            onChange={onChangeHandler}
          />
          {question.label}
        </label>
      ))}
      <button onClick={() => navigate('/result')}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
