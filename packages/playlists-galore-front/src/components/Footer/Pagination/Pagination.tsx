import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useAppContext } from '@/context';
import { PAGE_SIZE } from '@/config';
import { fetchPage } from '@/utils/fetch';
import { BORDER_RADIUS, COLORS, FONT, spacing } from '@/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > :not(:last-child) {
    margin-right: ${spacing(1)};
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  padding: ${spacing(1)};
  cursor: pointer;
  color: ${COLORS.FONT1};
  font-size: ${FONT.SIZE.LG};
  :disabled {
    color: ${COLORS.BG2};
    cursor: default;
  }
`;

const PageNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${BORDER_RADIUS.LG};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

function OldNavigation() {
  const [{ total, currentPage, currentTab }, dispatch] = useAppContext();

  const nbPages = useMemo(() => {
    if (total) {
      return Math.ceil(total / PAGE_SIZE);
    }
    return 0;
  }, [total]);

  const pages = useMemo(() => {
    const arr = [];
    for (let i = 0; i < nbPages; i++) {
      arr.push(i);
    }
    return arr;
  }, [nbPages]);

  const handleclick = useCallback(
    (page: number) => {
      if (page !== currentPage) {
        fetchPage(page, currentTab, dispatch);
      }
    },
    [dispatch, currentTab, currentPage]
  );

  const handleKeyPress = useCallback(
    (e, p: number) => {
      if (e.key === 'Enter') {
        handleclick(p);
      }
    },
    [handleclick]
  );

  const goToPrevious = useCallback(() => {
    fetchPage(currentPage - 1, currentTab, dispatch);
  }, [currentPage, currentTab, dispatch]);

  const goToNext = useCallback(() => {
    fetchPage(currentPage + 1, currentTab, dispatch);
  }, [currentPage, currentTab, dispatch]);

  return (
    <Container>
      <StyledButton
        type="button"
        onClick={goToPrevious}
        disabled={currentPage === 0}
      >
        &lt;
      </StyledButton>
      {pages.map((p) => (
        <PageNumber
          role="button"
          tabIndex={0}
          key={p}
          onClick={() => handleclick(p)}
          onKeyPress={(e) => handleKeyPress(e, p)}
          style={{
            backgroundColor: p === currentPage ? COLORS.FONT1 : '',
            color: p === currentPage ? COLORS.BG1 : '',
          }}
        >
          {p + 1}
        </PageNumber>
      ))}
      <StyledButton
        type="button"
        onClick={goToNext}
        disabled={currentPage === nbPages - 1}
      >
        &gt;
      </StyledButton>
    </Container>
  );
}

export default OldNavigation;
