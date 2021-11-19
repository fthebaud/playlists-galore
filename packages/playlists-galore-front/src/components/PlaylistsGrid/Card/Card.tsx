import React from 'react';
import styled from 'styled-components';
import { SPOTIFY_APP_URL, SPOTIFY_WEB_PLAYER_URL } from '@/config';
import { Playlist } from 'playlists-galore-toolbox';
import { BORDER_RADIUS, COLORS, FONT, spacing } from '@/theme';

const Container = styled.div`
  border: 1px solid black;
  background-color: ${COLORS.BG2};
  border-radius: ${BORDER_RADIUS.LG};
  padding: ${spacing(2)};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  height: 40px;
  font-size: ${FONT.SIZE.BASE};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  text-align: center;
  margin-bottom: ${spacing(1)};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
  & img {
    object-fit: contain;
    width: 100%;
  }
`;

const TracksTotal = styled.div`
  font-size: ${FONT.SIZE.SM};
  text-align: center;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${spacing(2)};
  & > a:first-of-type {
    margin-bottom: ${spacing(3)};
  }
`;

const Link = styled.a`
  font-size: ${FONT.SIZE.SM};
  border: 1px solid white;
  border-radius: ${BORDER_RADIUS.BASE};
  color: ${COLORS.FONT2};
  text-decoration: none;
  padding: ${spacing(1)};
  text-align: center;
`;

type Props = {
  playlist: Playlist;
};

function Card({ playlist }: Props) {
  const { url } = playlist.images[1]; // 640*640, 300*300, 60*60
  return (
    <Container>
      <Title>{playlist.name.replaceAll('"', '')}</Title>

      <Content>
        <ImageContainer>
          <img src={url} alt="cover art" />
        </ImageContainer>
        <RightContainer>
          <TracksTotal>{`${playlist.totalTracks} tracks`}</TracksTotal>
          <LinksContainer>
            <Link href={`${SPOTIFY_APP_URL}/${playlist.id}`}>Application</Link>
            <Link
              href={`${SPOTIFY_WEB_PLAYER_URL}/${playlist.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Player
            </Link>
          </LinksContainer>
        </RightContainer>
      </Content>
    </Container>
  );
}

export default Card;
