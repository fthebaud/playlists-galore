import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';

const StyledHeader = styled.header`
  padding: 1rem;
  text-align: center;
`;

function Header() {
  const { total } = useAppState();
  return (
    <StyledHeader>
      <div>PLAYLISTS GALORE</div>
      {total !== 0 && <div>{total} playlists so far!</div>}
    </StyledHeader>
  );
}

export default Header;
