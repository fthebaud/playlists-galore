import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';

const app = new App();

app
  .use(logger())
  .get('/playlists', (req, res) => {
    // https://api.spotify.com/v1/users/1146005630/playlists
    res.send(`${req.method || 'GET'} request to homepage`);
  })
  // eslint-disable-next-line no-console
  .listen(3000, () => console.log('Listening on http://localhost:3000'));
