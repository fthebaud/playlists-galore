import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useAppContext } from '@/context';
import { PAGE_SIZE } from '@/config';
import { fetchPage } from '@/utils/page';

const StyledFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

function Footer() {
  const [{ total, currentPage }, dispatch] = useAppContext();

  const lastPage = useMemo(() => {
    if (total) {
      return Math.floor(total / PAGE_SIZE);
    }
    return 0;
  }, [total]);

  const options = useMemo(() => {
    const opts = [];
    for (let i = 0; i <= lastPage; i++) {
      opts.push({
        value: i,
        label: `Page ${i + 1}`,
      });
    }
    return opts;
  }, [lastPage]);

  const handleBlur = useCallback(
    (e) => {
      fetchPage(Number.parseInt(e.target.value), dispatch);
    },
    [dispatch]
  );

  const goToFirst = useCallback(() => {
    fetchPage(0, dispatch);
  }, [dispatch]);

  const goToPrevious = useCallback(() => {
    fetchPage(currentPage - 1, dispatch);
  }, [currentPage, dispatch]);

  const goToNext = useCallback(() => {
    fetchPage(currentPage + 1, dispatch);
  }, [currentPage, dispatch]);

  const goToLast = useCallback(() => {
    fetchPage(lastPage, dispatch);
  }, [lastPage, dispatch]);

  return (
    <StyledFooter>
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
    </StyledFooter>
  );
}

export default Footer;
