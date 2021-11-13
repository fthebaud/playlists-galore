import React, { useCallback } from 'react';
import styled from 'styled-components';
import { spacing, BORDER_RADIUS, FONT } from '@/theme';
import { useAppContext } from '@/context';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing(1)};
`;

type TabProp = {
  active: boolean;
};

const Tab = styled.div`
  padding: ${spacing(1)};
  border-radius: ${BORDER_RADIUS.BASE};
  outline: ${(props: TabProp) => (props.active ? '1px solid white' : 'none')};
  cursor: pointer;
  width: 250px;
  font-size: ${FONT.SIZE.SM};
  &:not(:last-of-type) {
    margin-right: ${spacing(1)};
  }
`;

function Tabs() {
  const [{ currentTab, standardTabCount, specialTabCount }, dispatch] =
    useAppContext();

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
        Monthly/Weekly Selections ({standardTabCount})
      </Tab>
      <Tab onClick={setTabSpecial} active={currentTab === 'SPECIAL'}>
        Compilations, Best Of, etc. ({specialTabCount})
      </Tab>
    </Container>
  );
}

export default Tabs;
