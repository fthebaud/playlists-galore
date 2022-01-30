import { PGResponse } from 'playlists-galore-toolbox';
import { Cache } from '../types';
import { filterPlaylistsByCategories } from '../utils/filter';
import playlistsdb from '../data/playlists';

const cache: Cache = {
  playlists: playlistsdb,
  timestamp: Date.now(),
};

async function getPlaylists({
  offset = 0,
  limit = 20,
  categoriesFilter,
}: {
  offset: number;
  limit: number;
  categoriesFilter?: string[];
}): Promise<PGResponse> {
  let { playlists } = cache;
  if (categoriesFilter) {
    playlists = filterPlaylistsByCategories(cache.playlists, categoriesFilter);
  }
  return {
    items: playlists.slice(offset, offset + limit),
    total: playlists.length,
    cacheTotal: cache.playlists.length,
    cacheTimestamp: cache.timestamp,
  };
}

export const db = {
  getPlaylists,
};
