import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
function Ho({ API }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(API)).json();
    setMovies(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
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

export default Ho;
