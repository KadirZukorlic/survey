import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

export const Name = () => {
  const { name, setName } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      <h3>Who are you</h3>
      <h1>Please enter your name.</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <button onClick={() => navigate('/visit-frequency')}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </Fragment>
  );
};
