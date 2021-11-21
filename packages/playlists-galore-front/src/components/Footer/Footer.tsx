import React from 'react';
import styled from 'styled-components';
import { spacing } from '@/theme';
import Pagination from './Pagination';

const StyledFooter = styled.div`
  padding: ${spacing(1)};
  display: flex;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Pagination />
    </StyledFooter>
  );
}

export default Footer;
