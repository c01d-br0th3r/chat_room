import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../store/actions";

const Movies = () => {
  console.log("Rerendered");
  const [page, setPage] = useState(1);
  console.log("After rerenddered, page = ", page);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleScroll = () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    if (clientHeight + scrollTop === scrollHeight) {
      console.log("call setter");
      setPage((page) => page + 1);
      console.log("called setter");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);
  useEffect(() => {
    console.log("dispatch movies");
    dispatch(allActions.moviesActions.fetchMovies(page));
  }, [page]);

  console.log(movies, page);
  const { loading, data } = movies;
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((d) => (
            <div key={d.id}>{d.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
