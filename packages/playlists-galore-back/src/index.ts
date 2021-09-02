import path from 'path';
import sirv from 'sirv';
import dotenv from 'dotenv';
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { getPlaylists } from './spotifyClient';

// .env file should be located at the root of the package
dotenv.config();

const app = new App();

const PORT = Number.parseInt(process.env.PORT || '8000');

app
  .use(logger())
  .get('/api/playlists', (req, res) => {
    getPlaylists().then((data) => {
      res.send(data);
    });
  })
  // Serve static files from the front package
  .use('/', sirv(path.join(__dirname, '../../playlists-galore-front/dist')))
  // eslint-disable-next-line no-console
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
