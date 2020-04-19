const movies = (state = { loading: true, data: [] }, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
      };
    case "FETCH_MOIVES_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default movies;
