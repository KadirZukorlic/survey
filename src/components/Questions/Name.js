import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { BackButton } from '../UI/Buttons/BackButton';
import { Button } from '../UI/Buttons/Button';

import './name.styles.css';

export const Name = () => {
  const { name, setName } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="name-wrapper">
      <div style={{ fontWeight: 'bold' }}>WHO ARE YOU?</div>
      <h1 style={{ fontSize: '3rem' }}>Please enter your name.</h1>
      <input
        className="input"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <Button onClick={() => navigate('/visit-frequency')}> Next </Button>
        <BackButton onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};
