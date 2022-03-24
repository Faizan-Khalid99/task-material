const initialState = { data: [] };

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Show_Movies":
      console.log("reducer working");
      return {
        ...state,
        data: action.payload,
      };
    case "Delete_Movie":
      return {
        ...state,
        data: state.data.filter((data) => data.episode_id !== action.payload),
      };
    default:
      return state;
  }
};
export default moviesReducer;
