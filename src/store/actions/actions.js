import { FETCH_MOVIES, DELETE_MOVIE } from "../Types/types";

export const fetchData = () => async (dispatch) => {
  const response = await fetch(`https://swapi.dev/api/films`);
  const res = await response.json();
  dispatch({
    type: FETCH_MOVIES,
    payload: res.results,
  });
};

export const deleteMovie = (index) => async (dispatch) => {
  dispatch({
    type: DELETE_MOVIE,
    payload: index,
  });
};
