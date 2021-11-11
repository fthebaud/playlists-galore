import {
  isSearchProperty,
  Playlist,
  SearchOptions,
} from 'playlists-galore-toolbox';

export function getSearch(search: string | string[] | undefined) {
  if (!search || Array.isArray(search)) {
    return undefined;
  }
  // {keyword: [value1, value2]}
  const matches = search.match(/^{(.*?)\s*:\s*\[(.*)\]}$/);
  if (matches && isSearchProperty(matches[1])) {
    return {
      property: matches[1],
      values: matches[2].split(',').map((s: string) => s.trim()),
    } as SearchOptions;
  }
  return undefined;
}

export function searchPlaylists(playlists: Playlist[], search: SearchOptions) {
  if (search.property === 'category') {
    return playlists.filter(
      (playlist) =>
        playlist.category && search.values.includes(playlist.category)
    );
  }
  console.error('unsupported search options: ', search);
  return playlists;
}
