import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../context';
import { getPage } from '../../client';
import Header from '../Header';
import PlaylistsGrid from '../PlaylistsGrid';
import Footer from '../Footer';

const Container = styled.div`
  text-align: center;
  background-color: grey;
  height: 100%;
  overflow: auto;
`;
function HomePage() {
  const dispatch = useDispatch();

  // Load firts page
  useEffect(() => {
    getPage(0).then((playlists) =>
      dispatch({
        type: 'SET_PLAYLIST',
        playlists,
      })
    );
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
