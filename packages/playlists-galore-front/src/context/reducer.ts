import { Playlist } from 'playlists-galore-toolbox';
import { wrapReducer } from '@fthebaud/reducer-logger';
import { Action } from './action';

export type AppState = {
  playlists: Playlist[];
};

export const initialState: AppState = {
  playlists: [],
};

const reducerFunction = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const reducer = wrapReducer<AppState, Action>(reducerFunction, {
  disabled: process.env.NODE_ENV === 'production',
  displayName: 'playlists-galore',
});
