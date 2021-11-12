import { fetchPlaylists } from '../spotifyClient';
import { Cache, SpotifyPlaylist } from '../types';
import { getCategory, getTags } from '../utils/description';
import { filterPlaylistsByCategories } from '../utils/filter';

const cache: Cache = {
  playlists: [],
  timestamp: null,
  status: null,
};

const LIMIT = 50;

const CACHE_MAX_AGE = 3600000; // 3600000ms = 1h

function isCacheInvalid() {
  if (cache.timestamp) {
    const maxAge = cache.timestamp + CACHE_MAX_AGE;
    return Date.now() > maxAge;
  }
  return true;
}

async function loadCacheIfInvalid() {
  if (isCacheInvalid()) {
    // Reset cache
    cache.playlists = [];
    cache.timestamp = null;
    // Load all pages, starting from first page
    await loadPage(0);
    cache.timestamp = Date.now();
    return true;
  }
  return false;
}

async function getPlaylists({
  offset = 0,
  limit = 20,
  categoriesFilter,
}: {
  offset: number;
  limit: number;
  categoriesFilter?: string[];
}) {
  await loadCacheIfInvalid();
  let { playlists } = cache;
  if (categoriesFilter) {
    playlists = filterPlaylistsByCategories(cache.playlists, categoriesFilter);
  }
  return {
    items: playlists.slice(offset, offset + limit),
    total: playlists.length,
    cacheTimestamp: cache.timestamp,
    cacheStatus: cache.status,
  };
}

function addPlaylistsToCache(SpotifyPlaylists: SpotifyPlaylist[]) {
  cache.playlists = [
    ...cache.playlists,
    ...SpotifyPlaylists.map(({ id, name, images, tracks, description }) => ({
      id,
      name,
      images,
      category: getCategory(description, name),
      tags: getTags(description, name),
      totalTracks: tracks.total,
    })),
  ];
}

async function loadPage(offset: number): Promise<boolean> {
  const response = await fetchPlaylists(offset, LIMIT);
  if (response) {
    // eslint-disable-next-line no-console
    console.log(
      `LOADED: ${offset} -> ${offset + LIMIT} (${response.items.length} itemss)`
    );
    addPlaylistsToCache(response.items);

    if (response.next) {
      // LOAD THE NEXT PAGE
      return loadPage(response.offset + LIMIT);
    }
    if (cache.playlists.length !== response.total) {
      // DONE, BUT WITH ERROR
      cache.status = 'KO';
      console.error(
        `error while loading playlists. ${cache.playlists.length} loaded, should be ${response.total} `
      );
      return false;
    }
    // DONE, EVERYTHING IS FINE
    cache.status = 'OK';
    return true;
  }
  cache.status = 'INCOMPLETE';
  console.error(`error while loading page. offset=${offset}`);
  return false;
}

export const db = {
  getPlaylists,
};
