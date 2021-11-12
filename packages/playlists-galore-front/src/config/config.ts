import { Tab } from '@/context/reducer';
import { Category } from 'playlists-galore-toolbox';

export const PAGE_SIZE = 20;

export const SPOTIFY_WEB_PLAYER_URL = 'https://open.spotify.com/playlist';

export const SPOTIFY_APP_URL = 'spotify:playlist';

type TabConfig = {
  [key in Tab]: Category[];
};

export const TAB_CONFIG: TabConfig = {
  STANDARD: ['weekly', 'monthly'],
  SPECIAL: ['artist', 'ongoing', 'toutetnimp', 'yearly', 'misc.'],
};
