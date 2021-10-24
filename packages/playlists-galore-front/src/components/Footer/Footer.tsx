import React, { useCallback, useMemo } from 'react';
import { useAppContext } from '@/context';
import { PAGE_SIZE } from '@/config';
import { fetchPlaylists } from '@/utils/fetch';

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
      fetchPlaylists(e.target.value, dispatch);
    },
    [dispatch]
  );

  const goToFirst = useCallback(() => {
    fetchPlaylists(0, dispatch);
  }, [dispatch]);

  const goToPrevious = useCallback(() => {
    fetchPlaylists(currentPage - 1, dispatch);
  }, [currentPage, dispatch]);

  const goToNext = useCallback(() => {
    fetchPlaylists(currentPage + 1, dispatch);
  }, [currentPage, dispatch]);

  const goToLast = useCallback(() => {
    fetchPlaylists(lastPage, dispatch);
  }, [lastPage, dispatch]);

  return (
    <div>
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
    </div>
  );
}

export default Footer;
