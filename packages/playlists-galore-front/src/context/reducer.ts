import { Playlist } from 'playlists-galore-toolbox';
import { wrapReducer } from '@fthebaud/reducer-logger';
import { Action } from './action';

export type Tab = 'STANDARD' | 'SPECIAL';

export type AppState = {
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  playlists: Playlist[];
  total: number;
  currentTab: Tab;
};

export const initialState: AppState = {
  isLoading: false,
  error: null,
  currentPage: 0,
  playlists: [],
  total: 0,
  currentTab: 'STANDARD',
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

    case 'SET_TAB': {
      const { tab } = action;
      return {
        ...state,
        currentTab: tab,
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
