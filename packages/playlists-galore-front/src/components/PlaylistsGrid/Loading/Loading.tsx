import { spacing } from '@/theme';
import React from 'react';
import styled from 'styled-components';
import LoadingAnimation from './LoadingAnimation';

const StyledLoading = styled.div`
  padding-top: ${spacing(10)};
`;

function Loading() {
  return (
    <StyledLoading>
      <div>LOADING</div>
      <LoadingAnimation />
    </StyledLoading>
  );
}

export default Loading;
