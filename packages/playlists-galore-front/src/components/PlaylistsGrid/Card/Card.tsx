import React from 'react';
import styled from 'styled-components';
import { SPOTIFY_WEB_PLAYER_URL } from '@/config';
import { Playlist } from 'playlists-galore-toolbox';
import { BORDER_RADIUS, COLORS, FONT, spacing } from '@/theme';
import SpotifyIcon from './SpotifyIcon';
import YoutubeMusicIcon from './YoutubeMusicIcon';
import AppleMusicIcon from './AppleMusicIcon';

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
  margin-left: ${spacing(2)}; ;
`;

const LinksContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Link = styled.a`
  width: 50px;
  height: 50px;
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
            <div>
              <Link
                href="https://music.youtube.com/playlist?list=PLvgI9LIWQRSJ3AINKhqK9o2zLG0Axtn2s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeMusicIcon />
              </Link>
            </div>
            <div>
              <Link
                // FIXME find all icons from the same source, with the same size
                style={{ width: 45, height: 45 }}
                href="https://music.apple.com/fr/playlist/weekend-playlist-13-07-2013/pl.u-AkAmazNixerPd8e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleMusicIcon />
              </Link>
            </div>
            <div>
              <Link
                href={`${SPOTIFY_WEB_PLAYER_URL}/${playlist.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon />
              </Link>
            </div>
          </LinksContainer>
        </RightContainer>
      </Content>
    </Container>
  );
}

export default Card;
