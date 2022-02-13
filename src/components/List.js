import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import { listPageReLoading, focusNav } from "../atom/Main";
import { useRecoilState, useSetRecoilState } from "recoil";

const listNums = [...Array(10)].map((_, i) => i + 1);

function List() {
  const { num, path } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useRecoilState(listPageReLoading);
  const focusPage = useSetRecoilState(focusNav);
  console.log(path);
  const getMovies = async () => {
    const json = await (
      await fetch(
        // `https://yts.mx/api/v2/list_movies.json?page=${num}&${path}&sort_by=year`
        `https://api.themoviedb.org/3/discover/movie?${path}&api_key=56190e9d8107fb6fe38424b5de13c69c&language=ko`
      )
    ).json();
    console.log(json.results);
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    console.log("useEffect");
    setReloading(false);
    setLoading(true);
    focusPage(path);

    getMovies();
  }, [reloading]);

  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.poster_path}
              title={movie.title}
              summary={movie.overview}
              genres={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default List;
