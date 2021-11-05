import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from '@/context';
import { fetchPlaylists } from '@/utils/fetch';
import Header from '@/components/Header';
import PlaylistsGrid from '@/components/PlaylistsGrid';
import Footer from '@/components/Footer';
import { COLORS, FONT } from '@/theme';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BG1};
  color: ${COLORS.FONT1};
  font-family: ${FONT.FAMILY};
`;
function HomePage() {
  const dispatch = useDispatch();

  // Load firts page
  useEffect(() => {
    fetchPlaylists(0, dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <PlaylistsGrid />
      <Footer />
    </Container>
  );
}

export default HomePage;
