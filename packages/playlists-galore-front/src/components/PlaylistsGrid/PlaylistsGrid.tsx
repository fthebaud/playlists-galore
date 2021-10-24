import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';

const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.5rem;
`;

const Card = styled.div`
  border: 1px solid black;
  background-color: lightgrey;
  height: 200px;
  border-radius: 6;
`;

function PlaylistsGrid() {
  const { playlists } = useAppState();
  return (
    <Grid>
      {playlists.map((p) => (
        <Card key={p.id}>{JSON.stringify(p.name)}</Card>
      ))}
    </Grid>
  );
}

export default PlaylistsGrid;
