import React from 'react';
import styled from 'styled-components';
import { spacing, FONT } from '@/theme';
import Tabs from './Tabs';

const StyledHeader = styled.header`
  padding: ${spacing(2)};
  text-align: center;
`;

const Title = styled.div`
  font-size: ${FONT.SIZE.LG};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin-bottom: ${spacing(1)};
`;

const SubTitle = styled.div`
  font-size: ${FONT.SIZE.SM};
  margin-bottom: ${spacing(2)};
  font-style: italic;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>PLAYLISTS GALORE</Title>
      {/* <SubTitle>A great collection of Playlists!</SubTitle> */}
      <SubTitle>WIP - adding support for apple music and youtube</SubTitle>
      <Tabs />
    </StyledHeader>
  );
}

export default Header;
