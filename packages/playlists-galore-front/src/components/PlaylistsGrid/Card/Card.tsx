import React from 'react';
import styled from 'styled-components';
import { SPOTIFY_APP_URL, SPOTIFY_WEB_PLAYER_URL } from '@/config';
import { Playlist } from 'playlists-galore-toolbox';
import { BORDER_RADIUS, COLORS, FONT, spacing } from '@/theme';

const Container = styled.div`
  background-color: ${COLORS.BG1};
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
  justify-content: center;
  padding: ${`${spacing(2)} ${spacing(4)}`};
  & > a:first-of-type {
    margin-bottom: ${spacing(3)};
  }
`;

const Link = styled.a`
  font-size: ${FONT.SIZE.SM};
  border-radius: ${BORDER_RADIUS.BASE};
  background-color: ${COLORS.FONT2};
  color: ${COLORS.BG1};
  text-decoration: none;
  padding: ${spacing(1)};
  text-align: center;
  :hover {
    background-color: ${COLORS.FONT1};
  }
`;

type Props = {
  playlist: Playlist;
};

function Card({ playlist }: Props) {
  // 640*640, 300*300, 60*60
  // When artists get remove from spotify, spotify will send only one picture, or no picture at all...
  const url = playlist.images[1].url || playlist.images[0].url || '';
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
            <Link href={`${SPOTIFY_APP_URL}/${playlist.id}`}>App</Link>
            <Link
              href={`${SPOTIFY_WEB_PLAYER_URL}/${playlist.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Web
            </Link>
          </LinksContainer>
        </RightContainer>
      </Content>
    </Container>
  );
}

export default Card;
