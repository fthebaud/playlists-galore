import { Playlist } from 'playlists-galore-toolbox';
import { Tab } from './reducer';

export type Dispatch = (action: Action) => void;

export type Action =
  | {
      type: 'FETCH_START';
    }
  | {
      type: 'FETCH_SUCCESS';
      currentPage: number;
      playlists: Playlist[];
      total: number;
    }
  | {
      type: 'FETCH_ERROR';
      error: string;
    }
  | {
      type: 'SET_TAB';
      tab: Tab;
    }
  | {
      type: 'SET_TAB_COUNT';
      standardTabCount: number;
      specialTabCount: number;
    };
