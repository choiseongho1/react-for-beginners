import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
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

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${num}&${path}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
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
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      <ul>
        {loading
          ? null
          : listNums.map((listNum) => {
              return (
                <li>
                  <Link
                    to={`/page/${path}/${listNum}`}
                    onClick={() => setReloading(true)}
                  >
                    {listNum}
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
export default List;
