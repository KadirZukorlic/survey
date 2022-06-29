import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

export const VisitFrequency = () => {
  const {
    selectedVisitFrequency,
    setSelectedVisitFrequency,
    visitFrequencyPoints,
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
  console.log(visitFrequencyPoints);

  return (
    <div>
      <div>Question 1</div>
      <h1>How often do you visit this website?</h1>
      <form>
        <label>
          <input
            type="radio"
            value="Often"
            checked={selectedVisitFrequency === 'Often'}
            onChange={onChangeHandler}
          />
          Often
        </label>
        <label>
          <input
            type="radio"
            value="Rarely"
            checked={selectedVisitFrequency === 'Rarely'}
            onChange={onChangeHandler}
          />
          Rarely
        </label>
        <label>
          <input
            type="radio"
            value="Never"
            checked={selectedVisitFrequency === 'Never'}
            onChange={onChangeHandler}
          />
          Never
        </label>
      </form>
      <button onClick={() => navigate('/result')}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
