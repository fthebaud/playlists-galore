import axios from 'axios';
import { PGResponse, Playlist } from 'playlists-galore-toolbox';

export async function fetchPlaylists(
  offset: number,
  limit: number,
  categories: string[]
): Promise<[Playlist[], number, number]> {
  const {
    data: { items, total, cacheTotal },
  } = await axios.get<PGResponse>(
    `${
      window.location.origin
    }/api/playlists?offset=${offset}&limit=${limit}&categories=${categories.join(
      ','
    )}`
  );
  return [items, total, cacheTotal];
}
