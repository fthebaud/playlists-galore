import { Playlist } from 'playlists-galore-toolbox';

export type Dispatch = (action: Action) => void;

export type Action =
  | {
      type: 'FECTH_START';
    }
  | {
      type: 'FECTH_SUCCESS';
      currentPage: number;
      playlists: Playlist[];
      total: number;
    }
  | {
      type: 'FECTH_ERROR';
      error: string;
    };
