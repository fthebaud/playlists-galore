import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';
import { spacing } from '@/theme';
import Loading from './Loading';
import Card from './Card';

const Grid = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: ${spacing(2)};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-gap: ${spacing(4)};
`;

function PlaylistsGrid() {
  const { playlists, isLoading } = useAppState();
  if (playlists.length === 0 || isLoading) {
    return <Loading />;
  }
  return (
    <Grid>
      {playlists.map((p) => (
        <Card key={p.name} playlist={p} />
      ))}
    </Grid>
  );
}

export default PlaylistsGrid;
