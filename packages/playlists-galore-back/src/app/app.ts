import path from 'path';
import sirv from 'sirv';

import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { getPlaylists } from '../spotifyClient';

const app = new App();

const PORT = Number.parseInt(process.env.PORT || '8000');

export function main() {
  app
    .use(logger())
    .get('/api/playlists', (req, res) => {
      const { offset, limit } = req.query;
      getPlaylists(
        Number.parseInt(offset as string),
        Number.parseInt(limit as string)
      ).then((data) => {
        const { items, total } = data;
        res.send({
          items: items.map(({ id, name, images, tracks }: any) => ({
            id,
            name,
            images,
            totalTracks: tracks.total,
          })),
          total,
        });
      });
    })
    // Serve static files from the front package
    .use(
      '/',
      sirv(path.join(__dirname, '../../../playlists-galore-front/dist'))
    )
    // eslint-disable-next-line no-console
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
}
