import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Playlist } from 'playlists-galore-toolbox';
import { Grid, AutoSizer, WindowScroller } from 'react-virtualized';

const LIMIT = 20;

const Container = styled.div`
  text-align: center;
  background-color: grey;
  height: 100%;
  overflow: auto;
`;

const Card = styled.div`
  border: 1px solid black;
  background-color: lightgrey;
  height: 200px;
  border-radius: 6;
`;

const Header = styled.header`
  position: relative;
  padding: 1rem;
`;

const Loadmore = styled.button`
  position: absolute;
  right: 1rem;
`;

function App() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    axios
      .get(`${window.location.origin}/api/playlists?offset=0&limit=${LIMIT}`)
      .then(({ data }) => {
        setPlaylists(data.items);
        offsetRef.current = LIMIT;
      });
  }, []);

  const handleClick = useCallback(() => {
    axios
      .get(
        `${window.location.origin}/api/playlists?offset=${offsetRef.current}&limit=${LIMIT}`
      )
      .then(({ data }) => {
        setPlaylists([...playlists, ...data.items]);
        offsetRef.current += LIMIT;
        // check if there's more to load
        setLoadingComplete(offsetRef.current >= data.total);
      });
  }, [playlists]);

  /** *
   *
   *  https://codesandbox.io/s/react-virtualized-infinite-scrolling-with-grid-1dmsf?file=/src/Demo.js:3782-3803&utm_source=pocket_mylist
   *  https://github.com/bvaughn/react-virtualized/blob/master/docs/README.md
   *
   */

  return (
    <Container>
      <Header>
        <span>PLAYLISTS GALORE</span>
        <Loadmore
          onClick={handleClick}
          type="button"
          disabled={loadingComplete}
        >
          Load More
        </Loadmore>
      </Header>
      <WindowScroller>
        {({ height, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <Grid
                cellRenderer={({ key, rowIndex, columnIndex }) => (
                  <Card key={key}>
                    {/* {JSON.stringify(playlists[rowIndex + columnIndex].name)} */}
                    {`${rowIndex} ${columnIndex}`}
                  </Card>
                )}
                height={height}
                width={width}
                scrollTop={scrollTop}
                columnCount={3}
                columnWidth={100}
                rowCount={10}
                rowHeight={200}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
      ,
    </Container>
  );
}

export default App;
