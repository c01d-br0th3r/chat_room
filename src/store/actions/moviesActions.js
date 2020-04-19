const fetchMovies = (page) => {
  return {
    type: "FETCH_MOVIES",
    page,
  };
};

const fetchMoviesSuccess = (data) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    data,
  };
};

const fetchMoviesFail = (error) => {
  return {
    type: "FETCH_MOVIES_FAIL",
    error,
  };
};

export default { fetchMovies, fetchMoviesSuccess, fetchMoviesFail };
