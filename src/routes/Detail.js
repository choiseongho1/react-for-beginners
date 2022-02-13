import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Imagepath } from "../atom/Main";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const [genres, setGenres] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=56190e9d8107fb6fe38424b5de13c69c&language=ko`
      )
    ).json();
    setDetail(json);
    setLoading(false);
    setGenres(detail.genres);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <div>평점 : {detail.vote_average}</div>
          <ul>
            {genres && genres.map((item) => <li key={item}>{item.name}</li>)}
          </ul>
          <hr />
          <img
            src={`${Imagepath}w1280/${detail.backdrop_path}`}
            alt={detail.title}
            style={{ height: "100%", width: "100%" }}
          />
          <p>{detail.overview}</p>
        </div>
      )}
    </div>
  );
}

// useParams() 함수를 사용하게 되면 React-Router가 변수를 넘겨줌

export default Detail;
