import React, { useContext } from 'react';
import { AppContext } from '../../App';

export const Result = () => {
  const { name } = useContext(AppContext);

  return <div>{name}</div>;
};
