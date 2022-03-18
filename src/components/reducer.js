export default (state, action) => {
  switch (action.type) {
    case "Show_Movies":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
