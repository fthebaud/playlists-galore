import { Playlist } from 'playlists-galore-toolbox';

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
    };
