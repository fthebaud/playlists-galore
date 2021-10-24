import React from 'react';
import styled from 'styled-components';
import { useAppState } from '@/context';
import { SPOTIFY_APP_URL, SPOTIFY_WEB_PLAYER_URL } from '@/config';

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
  border-radius: 6px;
  padding: 1rem;
`;

function PlaylistsGrid() {
  const { playlists } = useAppState();
  return (
    <Grid>
      {playlists.map((p) => (
        <Card key={p.id}>
          <div style={{ fontWeight: 'bold' }}>{JSON.stringify(p.name)}</div>
          <div>{`${p.totalTracks} tracks`}</div>
          <br />
          <br />
          <a
            href={`${SPOTIFY_WEB_PLAYER_URL}/${p.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            open in web player
          </a>
          <br />
          <br />
          <a href={`${SPOTIFY_APP_URL}/${p.id}`}>open in app</a>
        </Card>
      ))}
    </Grid>
  );
}

export default PlaylistsGrid;
