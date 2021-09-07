import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import { Playlist } from 'playlists-galore-toolbox';

const LIMIT = 20;

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: 'grey',
    height: '100%',
    overflow: 'auto',
  },
  grid: {
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
    gridGap: '1.5rem',
  },
  card: {
    border: '1px solid black',
    backgroundColor: 'lightgrey',
    height: '200px',
    borderRadius: 6,
  },
  header: {
    position: 'relative',
    padding: '1rem',
  },
  loadmore: {
    position: 'absolute',
    right: '1rem',
  },
});

function App() {
  const classes = useStyles();
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

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <span>PLAYLISTS GALORE</span>
        <button
          className={classes.loadmore}
          onClick={handleClick}
          type="button"
          disabled={loadingComplete}
        >
          Load More
        </button>
      </header>
      <div className={classes.grid}>
        {playlists.map((p) => (
          <div key={p.id} className={classes.card}>
            {JSON.stringify(p.name)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
