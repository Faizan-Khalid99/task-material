export default (state, action) => {
  switch (action.type) {
    case "Show_Movies":
      return {
        ...state,
        data: action.payload,
      };
    case "Delete_Movie":
      return {
        ...state,
        data: state.data.filter((data) => data.title !== action.payload),
      };
    default:
      return state;
  }
};
