import { getPage } from '@/client';
import { Dispatch } from '@/context/action';

export const fetchPlaylists = async (page: number, dispatch: Dispatch) => {
  dispatch({ type: 'FECTH_START' });
  try {
    const [playlists, total] = await getPage(page);
    dispatch({
      type: 'FECTH_SUCCESS',
      currentPage: page,
      playlists,
      total,
    });
  } catch (error) {
    dispatch({
      type: 'FECTH_ERROR',
      error: (error as Error).message,
    });
  }
};
