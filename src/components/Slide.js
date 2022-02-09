import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Movie from "./Movie";

function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 350);
  };
  const onClickR = () => {
    if (trans <= -2450) {
      return;
    }
    setTrans((current) => current - 350);
  };
  const getMovies = async () => {
    const json = await (await fetch(ytsApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>123</h2>
      ) : (
        <div className={styles.slide__show}>
          <div
            className={styles.slide}
            style={{
              transform: `translateX(${trans}px)`,
            }}
          >
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={""}
                genres={movie.genres}
                movie_style={{
                  minWidth: "350px",
                  height: "300px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide;
