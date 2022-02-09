import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import navList from "../atom/NavList";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
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
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
