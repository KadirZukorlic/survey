import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { Button } from '../UI/Button';

import './name.styles.css';

export const Name = () => {
  const { name, setName } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="content">
      <h3>WHO ARE YOU?</h3>
      <h1 style={{ fontSize: '3rem' }}>Please enter your name.</h1>
      <input
        type="text"
        placeholder="Kadir Zukorlic"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => navigate('/visit-frequency')}> Next </Button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
