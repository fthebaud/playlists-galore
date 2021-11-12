import path from 'path';
import sirv from 'sirv';

import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { db } from '../db';
import { parseCategoriesFilter } from '../utils/filter';

const app = new App();

const PORT = Number.parseInt(process.env.PORT || '8000');

export function main() {
  app
    .use(logger())
    .get('/api/playlists', (req, res) => {
      const { categories, offset, limit } = req.query;
      const categoriesFilter = parseCategoriesFilter(categories);
      db.getPlaylists({
        offset: Number.parseInt(offset as string),
        limit: Number.parseInt(limit as string),
        categoriesFilter,
      }).then((data) => {
        res.send(data);
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
