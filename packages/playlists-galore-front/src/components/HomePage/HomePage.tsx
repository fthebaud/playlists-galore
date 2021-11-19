import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppState, useDispatch } from '@/context';
import { fetchPage } from '@/utils/fetch';
import Header from '@/components/Header';
import PlaylistsGrid from '@/components/PlaylistsGrid';
import Footer from '@/components/Footer';
import { COLORS, FONT } from '@/theme';

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BG1};
  color: ${COLORS.FONT1};
  font-family: ${FONT.FAMILY};
`;

const GridContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function HomePage() {
  const dispatch = useDispatch();
  const { currentTab } = useAppState();

  // Load firts page
  useEffect(() => {
    fetchPage(0, currentTab, dispatch);
  }, [dispatch, currentTab]);

  return (
    <FlexContainer>
      <Header />
      <GridContainer>
        <PlaylistsGrid />
      </GridContainer>
      <Footer />
    </FlexContainer>
  );
}

export default HomePage;
