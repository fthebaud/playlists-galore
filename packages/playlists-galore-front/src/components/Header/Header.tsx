import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';
import { FONT } from '@/theme';

const StyledHeader = styled.header`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${FONT.SIZE.LG};
  font-weight: ${FONT.WEIGHT.BOLD};
`;

const SubTitle = styled.div`
  font-size: ${FONT.SIZE.SM};
`;

function Header() {
  const { total } = useAppState();
  return (
    <StyledHeader>
      <Title>PLAYLISTS GALORE</Title>
      {total !== 0 && <SubTitle>{total} playlists so far!</SubTitle>}
    </StyledHeader>
  );
}

export default Header;
