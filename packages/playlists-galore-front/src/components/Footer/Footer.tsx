import React, { useCallback } from 'react';
import styled from 'styled-components';

const Loadmore = styled.button`
  position: absolute;
  right: 1rem;
`;

function Footer() {
  const handleClick = useCallback(() => {
    // TODO
    // axios
    //   .get(
    //     `${window.location.origin}/api/playlists?offset=${offsetRef.current}&limit=${LIMIT}`
    //   )
    //   .then(({ data }) => {
    //     setPlaylists([...playlists, ...data.items]);
    //     offsetRef.current += LIMIT;
    //     // check if there's more to load
    //     setLoadingComplete(offsetRef.current >= data.total);
    //   });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Loadmore onClick={handleClick} type="button" disabled>
        Load More
      </Loadmore>
    </div>
  );
}

export default Footer;
