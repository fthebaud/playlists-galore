import React from 'react';
import styled from 'styled-components';
import { FONT } from '@/theme';
import Tabs from './Tabs';

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
  return (
    <StyledHeader>
      <Title>PLAYLISTS GALORE</Title>
      <SubTitle>A great collection of Spotify Playlists!</SubTitle>
      <Tabs />
    </StyledHeader>
  );
}

export default Header;
