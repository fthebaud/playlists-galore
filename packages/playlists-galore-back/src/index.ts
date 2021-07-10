import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { getPlaylists } from './spotifyClient';

const app = new App();

app
  .use(logger())
  .get('/playlists', (req, res) => {
    getPlaylists().then((data) => {
      res.send(`data: ${JSON.stringify(data)}`);
    });
  })
  // eslint-disable-next-line no-console
  .listen(8000, () => console.log('Listening on http://localhost:8000'));
