import { FETCH_MOVIES, DELETE_MOVIE  } from "../Types/types";
const initialState = { data: [] };

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        data: state.data.filter((data) => data.episode_id !== action.payload),
      };
    default:
      return state;
  }
};
export default moviesReducer;
