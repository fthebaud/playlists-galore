import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Playlist } from 'playlists-galore-toolbox';
import InfiniteGrid from './InfiniteGrid';

const LIMIT = 20;

const Container = styled.div`
  text-align: center;
  background-color: grey;
  height: 100%;
  overflow: auto;
`;

// const Grid = styled.div`
//   padding: 1rem;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   grid-gap: 1.5rem;
// `;

// const Card = styled.div`
//   border: 1px solid black;
//   background-color: lightgrey;
//   height: 200px;
//   border-radius: 6;
// `;

const Header = styled.header`
  position: relative;
  padding: 1rem;
`;

// const Loadmore = styled.button`
//   position: absolute;
//   right: 1rem;
// `;

function App() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState<boolean>(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    axios
      .get(`${window.location.origin}/api/playlists?offset=0&limit=${LIMIT}`)
      .then(({ data }) => {
        setPlaylists(data.items);
        offsetRef.current = LIMIT;
      });
  }, []);

  const loadNextPage = useCallback(() => {
    setIsNextPageLoading(true);
    axios
      .get(
        `${window.location.origin}/api/playlists?offset=${offsetRef.current}&limit=${LIMIT}`
      )
      .then(({ data }) => {
        setIsNextPageLoading(false);
        setPlaylists([...playlists, ...data.items]);
        offsetRef.current += LIMIT;
        // check if there's more to load
        setHasNextPage(offsetRef.current < data.total);
      });
  }, [playlists]);

  return (
    <Container>
      <Header>
        <span>PLAYLISTS GALORE</span>
        {/* <Loadmore
          onClick={handleClick}
          type="button"
          disabled={!hasNextPage}
        >
          Load More
        </Loadmore> */}
      </Header>
      {/* <Grid>
        {playlists.map((p) => (
          <Card key={p.id}>{JSON.stringify(p.name)}</Card>
        ))}
      </Grid> */}
      <InfiniteGrid
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        items={playlists}
        loadNextPage={loadNextPage}
      />
    </Container>
  );
}

export default App;
