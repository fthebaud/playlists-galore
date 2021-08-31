import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [playslists, setPlaylists] = useState(null);
  useEffect(() => {
    axios
      .get(`${window.location.origin}/api/playlists`)
      .then(({ data }) => setPlaylists(data));
  });

  return (
    <div className="App">
      <div>Coucou</div>
      {playslists}
    </div>
  );
}

export default App;
