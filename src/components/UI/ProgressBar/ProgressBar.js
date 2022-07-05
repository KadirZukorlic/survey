import React from 'react';
import styled from 'styled-components';

export const ProgressBar = (props) => {
  return (
    <Container>
      <Progress points={props.points} />
    </Container>
  );
};

const Container = styled.div`
  width: 550px;
  height: 40px;
  border: 2px solid #ffffff;
`;

const Progress = styled.div`
  width: ${(props) => props.points}%;
  height: 100%;
  background-color: #fff;
`;
