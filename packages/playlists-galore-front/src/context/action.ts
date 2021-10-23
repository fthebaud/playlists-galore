import { Playlist } from 'playlists-galore-toolbox';

export type Dispatch = (action: Action) => void;

export type Action = {
  type: 'SET_PLAYLIST';
  playlists: Playlist[];
};
