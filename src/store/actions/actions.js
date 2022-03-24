import { FETCH_MOVIES, DELETE_MOVIE } from "../Types/types";

export const fetchData = () => async (dispatch) => {
  const response = await fetch(`https://swapi.dev/api/films`);
  const res = await response.json();

  dispatch({
    type: FETCH_MOVIES,
    payload: res.results,
  });
};

export const deleteMovie = (episode_id) => async (dispatch) => {
  dispatch({
    type: DELETE_MOVIE,
    payload: episode_id,
  });
};
