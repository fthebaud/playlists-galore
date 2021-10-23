import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <span>PLAYLISTS GALORE</span>
    </StyledHeader>
  );
}

export default Header;
