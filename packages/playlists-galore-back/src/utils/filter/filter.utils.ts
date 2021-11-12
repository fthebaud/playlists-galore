import { Playlist } from 'playlists-galore-toolbox';

export function parseCategoriesFilter(
  categories: string | string[] | undefined
) {
  if (!categories || Array.isArray(categories)) {
    return [];
  }
  return categories.split(',').map((s: string) => s.trim());
}

export function filterPlaylistsByCategories(
  playlists: Playlist[],
  categories: string[]
) {
  if (categories.length === 0) {
    return playlists;
  }
  return playlists.filter(
    (playlist) => playlist.category && categories.includes(playlist.category)
  );
}
