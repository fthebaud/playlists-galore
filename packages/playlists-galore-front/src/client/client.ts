import axios from 'axios';
import { Playlist } from 'playlists-galore-toolbox';
import { PAGE_SIZE } from '../config';

export async function getPage(pageNumber: number): Promise<Playlist[]> {
  const { data } = await axios.get(
    `${window.location.origin}/api/playlists?offset=${pageNumber}&limit=${PAGE_SIZE}`
  );
  return data.items;
}
