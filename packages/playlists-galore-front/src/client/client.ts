import axios from 'axios';
import { Playlist } from 'playlists-galore-toolbox';
import { PAGE_SIZE } from '../config';

export async function getPage(
  pageNumber: number
): Promise<[Playlist[], number]> {
  const { data } = await axios.get(
    `${window.location.origin}/api/playlists?offset=${
      pageNumber * PAGE_SIZE
    }&limit=${PAGE_SIZE}`
  );
  return [data.items, data.total];
}
