import { Tab } from '@/context/reducer';
import { Category } from 'playlists-galore-toolbox';

export const PAGE_SIZE = 24; // should be a multiple of 2 and 3 and 4 since layout can be between 1 and 4 columns

type TabConfig = {
  [key in Tab]: Category[];
};

export const TAB_CONFIG: TabConfig = {
  STANDARD: ['weekly', 'monthly'],
  SPECIAL: ['artist', 'ongoing', 'toutetnimp', 'yearly', 'misc.'],
};
