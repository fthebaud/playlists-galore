import path from 'path';
import sirv from 'sirv';

import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { db } from '../db';

const app = new App();

const PORT = Number.parseInt(process.env.PORT || '8000');

export function main() {
  app
    .use(logger())
    .get('/api/playlists', (req, res) => {
      const { offset, limit } = req.query;
      db.getPlaylists(
        Number.parseInt(offset as string),
        Number.parseInt(limit as string)
      ).then(({ items, total, status, timestamp }) => {
        res.send({
          items,
          total,
          cacheStatus: status,
          cacheTimestamp: timestamp,
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
