export const fetchData = () => async (dispatch) => {
  console.log("fetchData trying to dispatch");
  const response = await fetch(`https://swapi.dev/api/films`);
  const res = await response.json();
  console.log(res.results);
  dispatch({
    type: "Show_Movies",
    payload: res.results,
  });
};

export const deleteMovie = (episode_id) => async (dispatch) => {
  dispatch({
    type: "Delete_Movie",
    payload: episode_id,
  });
};
