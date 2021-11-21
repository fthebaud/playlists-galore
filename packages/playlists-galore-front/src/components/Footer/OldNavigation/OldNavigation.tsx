import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useAppContext } from '@/context';
import { PAGE_SIZE } from '@/config';
import { fetchPage } from '@/utils/fetch';
import { spacing } from '@/theme';

const Container = styled.div`
  & > :not(:last-child) {
    margin-right: ${spacing(2)};
  }
`;

function OldNavigation() {
  const [{ total, currentPage, currentTab }, dispatch] = useAppContext();

  const lastPage = useMemo(() => {
    if (total) {
      return Math.ceil(total / PAGE_SIZE);
    }
    return 0;
  }, [total]);

  const options = useMemo(() => {
    const opts = [];
    for (let i = 0; i < lastPage; i++) {
      opts.push({
        value: i,
        label: `Page ${i + 1}`,
      });
    }
    return opts;
  }, [lastPage]);

  const handleBlur = useCallback(
    (e) => {
      fetchPage(Number.parseInt(e.target.value), currentTab, dispatch);
    },
    [dispatch, currentTab]
  );

  const goToFirst = useCallback(() => {
    fetchPage(0, currentTab, dispatch);
  }, [dispatch, currentTab]);

  const goToPrevious = useCallback(() => {
    fetchPage(currentPage - 1, currentTab, dispatch);
  }, [currentPage, currentTab, dispatch]);

  const goToNext = useCallback(() => {
    fetchPage(currentPage + 1, currentTab, dispatch);
  }, [currentPage, currentTab, dispatch]);

  const goToLast = useCallback(() => {
    fetchPage(lastPage, currentTab, dispatch);
  }, [lastPage, currentTab, dispatch]);

  return (
    <Container>
      <button type="button" onClick={goToFirst} disabled={currentPage === 0}>
        First
      </button>
      <button type="button" onClick={goToPrevious} disabled={currentPage === 0}>
        Previous
      </button>
      <select value={currentPage} onChange={handleBlur}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {' '}
            {label}{' '}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={goToNext}
        disabled={currentPage === lastPage}
      >
        Next
      </button>
      <button
        type="button"
        onClick={goToLast}
        disabled={currentPage === lastPage}
      >
        Last
      </button>
    </Container>
  );
}

export default OldNavigation;
