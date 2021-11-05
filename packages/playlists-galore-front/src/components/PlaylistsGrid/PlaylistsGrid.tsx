import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';
import Loading from './Loading';
import Card from './Card';

const Grid = styled.div`
  flex: 1;
  overflow: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.5rem;
`;

function PlaylistsGrid() {
  const { playlists } = useAppState();
  return (
    <Grid>
      {playlists.length === 0 ? (
        <Loading />
      ) : (
        playlists.map((p) => <Card key={p.id} playlist={p} />)
      )}
    </Grid>
  );
}

export default PlaylistsGrid;
