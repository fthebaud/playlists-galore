import axios from 'axios';
import { Playlist } from 'playlists-galore-toolbox';

export async function fetchPlaylists(
  offset: number,
  limit: number
): Promise<[Playlist[], number]> {
  const { data } = await axios.get(
    `${window.location.origin}/api/playlists?offset=${offset}&limit=${limit}&categories=weekly, monthly`
  );
  return [data.items, data.total];
}
