import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import { Playlist } from 'playlists-galore-toolbox';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: 'grey',
    height: '100%',
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
});

function App() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    axios
      .get(`${window.location.origin}/api/playlists`)
      .then(({ data }) => setPlaylists(data.items));
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.app}>
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
