import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1 style={{ margin: '0', fontSize: '5rem' }}>Welcome to Our survey.</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <button onClick={() => navigate('/name')}>Start the survey</button>
    </div>
  );
};
