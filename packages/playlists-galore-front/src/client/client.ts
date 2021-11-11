import axios from 'axios';
import { Playlist } from 'playlists-galore-toolbox';

export async function fetchPlaylists(
  offset: number,
  limit: number
): Promise<[Playlist[], number]> {
  const { data } = await axios.get(
    // TODO searchToString function
    `${window.location.origin}/api/playlists?offset=${offset}&limit=${limit}&search={category: [weekly, monthly]}`
  );
  return [data.items, data.total];
}
