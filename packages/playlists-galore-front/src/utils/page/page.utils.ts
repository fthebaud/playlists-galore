import { fetchPlaylists } from '@/client';
import { Dispatch } from '@/context/action';
import { PAGE_SIZE } from '@/config';

export const fetchPage = async (page: number, dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_START' });
  try {
    const [playlists, total] = await fetchPlaylists(
      page * PAGE_SIZE,
      PAGE_SIZE
    );
    dispatch({
      type: 'FETCH_SUCCESS',
      currentPage: page,
      playlists,
      total,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_ERROR',
      error: (error as Error).message,
    });
  }
};
