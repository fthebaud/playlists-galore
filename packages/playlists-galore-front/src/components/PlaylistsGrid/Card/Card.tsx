import React from 'react';
import styled from 'styled-components';
import { SPOTIFY_APP_URL, SPOTIFY_WEB_PLAYER_URL } from '@/config';
import { Playlist } from 'playlists-galore-toolbox';
import { BORDER_RADIUS, COLORS, spacing } from '@/theme';

const Container = styled.div`
  border: 1px solid black;
  background-color: ${COLORS.BG2};
  height: 250px;
  border-radius: ${BORDER_RADIUS.LG};
  padding: ${spacing(2)};
  text-align: center;
  & a:link,
  a:hover,
  a:visited {
    color: ${COLORS.FONT2};
  }
`;

const Content = styled.div`
  display: flex;
  padding: ${spacing(4)};
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

type Props = {
  playlist: Playlist;
};

function Card({ playlist }: Props) {
  const { url, height, width } = playlist.images[2]; // 640*640, 300*300, 60*60
  return (
    <Container>
      <div style={{ fontWeight: 'bold' }}>{JSON.stringify(playlist.name)}</div>
      <div>{`${playlist.totalTracks} tracks`}</div>
      <Content>
        <ImageContainer>
          <img src={url} height={height} width={width} alt="cover art" />
        </ImageContainer>
        <Links>
          <a href={`${SPOTIFY_APP_URL}/${playlist.id}`}>open in app</a>
          <a
            href={`${SPOTIFY_WEB_PLAYER_URL}/${playlist.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            open in web player
          </a>
        </Links>
      </Content>
    </Container>
  );
}

export default Card;
