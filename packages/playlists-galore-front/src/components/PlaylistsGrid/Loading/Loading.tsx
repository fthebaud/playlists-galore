import React from 'react';
import styled from 'styled-components';
import LoadingAnimation from './LoadingAnimation';

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <StyledLoading>
      <span>LOADING!</span>
      <LoadingAnimation />
    </StyledLoading>
  );
}

export default Loading;
