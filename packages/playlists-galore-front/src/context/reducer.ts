import { Playlist } from 'playlists-galore-toolbox';
import { wrapReducer } from '@fthebaud/reducer-logger';
import { Action } from './action';

export type AppState = {
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  playlists: Playlist[];
  total: number;
};

export const initialState: AppState = {
  isLoading: false,
  error: null,
  currentPage: 0,
  playlists: [],
  total: 0,
};

const reducerFunction = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'FETCH_START': {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case 'FETCH_SUCCESS': {
      const { currentPage, playlists, total } = action;
      return {
        ...state,
        isLoading: false,
        currentPage,
        playlists,
        total,
      };
    }

    case 'FETCH_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export const reducer = wrapReducer<AppState, Action>(reducerFunction, {
  disabled: process.env.NODE_ENV === 'production',
  displayName: 'playlists-galore',
});
