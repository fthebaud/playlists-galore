import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SPACING, BORDER_RADIUS, FONT } from '@/theme';
import { useAppContext } from '@/context';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SPACING}px;
`;

type TabProp = {
  active: boolean;
};

const Tab = styled.div`
  padding: ${SPACING}px;
  border-radius: ${BORDER_RADIUS.LG}px;
  outline: ${(props: TabProp) => (props.active ? '1px solid white' : 'none')};
  cursor: pointer;
  width: 250px;
  font-size: ${FONT.SIZE.SM};
  &:not(:last-of-type) {
    margin-right: ${SPACING}px;
  }
`;

function Tabs() {
  const [{ currentTab, total, cacheTotal }, dispatch] = useAppContext();

  const setTabSTANDARD = useCallback(() => {
    dispatch({
      type: 'SET_TAB',
      tab: 'STANDARD',
    });
  }, [dispatch]);

  const setTabSpecial = useCallback(() => {
    dispatch({
      type: 'SET_TAB',
      tab: 'SPECIAL',
    });
  }, [dispatch]);

  // FIXME: find better way to get number of playlist per tab
  return (
    <Container>
      <Tab onClick={setTabSTANDARD} active={currentTab === 'STANDARD'}>
        Monthly/Weekly Selections (
        {currentTab === 'STANDARD' ? total : cacheTotal - total})
      </Tab>
      <Tab onClick={setTabSpecial} active={currentTab === 'SPECIAL'}>
        Compilations, Best Of, etc. (
        {currentTab === 'SPECIAL' ? total : cacheTotal - total})
      </Tab>
    </Container>
  );
}

export default Tabs;