import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../context';
import Header from '../Header';
import PlaylistsGrid from '../PlaylistsGrid';
import Footer from '../Footer';
import { fetchPlaylists } from '../../utils/fetch';

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
