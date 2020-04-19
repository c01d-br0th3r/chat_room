import { takeEvery, put, call } from "redux-saga/effects";
import { getMovies } from "../../api";
import allActions from "../actions";

function* workerSaga(action) {
  try {
    const {
      data: {
        data: { movies },
      },
    } = yield call(getMovies, action.page);
    yield put(allActions.moviesActions.fetchMoviesSuccess(movies));
  } catch (e) {
    yield put(allActions.moviesActions.fetchMoviesFail(e));
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", workerSaga);
}

export default rootSaga;
