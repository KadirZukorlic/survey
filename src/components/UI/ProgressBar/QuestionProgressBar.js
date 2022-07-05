import React from 'react';
import styled from 'styled-components';

export const QuestionProgressBar = (props) => {
  return (
    <Container>
      <Progress width={props.width} lastQuestion={props.lastQuestion} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 12px;
  border: 2px solid #707070;
  border-radius: 20px;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px 0 0 20px;
  border-radius: ${(props) => (props.lastQuestion ? '20px' : '20px 0 0 20px')};
`;
