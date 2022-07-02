import React from 'react';
import './styles.css';

export const MainLayout = (props) => {
  return (
    <div className="wrapper">
      <div className="border">{props.children}</div>
    </div>
  );
};
