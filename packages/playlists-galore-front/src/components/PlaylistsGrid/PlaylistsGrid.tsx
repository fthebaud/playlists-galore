import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';
import { spacing } from '@/theme';
import Loading from './Loading';
import Card from './Card';

const Grid = styled.div`
  padding: ${spacing(2)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: ${spacing(3)}; ;
`;

function PlaylistsGrid() {
  const { playlists, isLoading } = useAppState();
  return (
    <Grid>
      {playlists.length === 0 || isLoading ? (
        <Loading />
      ) : (
        playlists.map((p) => <Card key={p.id} playlist={p} />)
      )}
    </Grid>
  );
}

export default PlaylistsGrid;
