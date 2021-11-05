import React from 'react';
import styled from 'styled-components';
import { SPOTIFY_APP_URL, SPOTIFY_WEB_PLAYER_URL } from '@/config';
import { Playlist } from 'playlists-galore-toolbox';
import { COLORS } from '@/theme';

const Container = styled.div`
  border: 1px solid black;
  background-color: ${COLORS.BG2};
  height: 200px;
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
  & a:link,
  a:hover,
  a:visited {
    color: ${COLORS.FONT2};
  }
`;

type Props = {
  playlist: Playlist;
};

function Card({ playlist }: Props) {
  return (
    <Container>
      <div style={{ fontWeight: 'bold' }}>{JSON.stringify(playlist.name)}</div>
      <div>{`${playlist.totalTracks} tracks`}</div>
      <br />
      <br />
      <a
        href={`${SPOTIFY_WEB_PLAYER_URL}/${playlist.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        open in web player
      </a>
      <br />
      <br />
      <a href={`${SPOTIFY_APP_URL}/${playlist.id}`}>open in app</a>
    </Container>
  );
}

export default Card;
