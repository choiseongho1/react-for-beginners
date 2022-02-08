import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const [star, setStar] = useState();

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json);
    setLoading(false);
    setStar(json.data.movie.rating * 20);
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
          <h1>{detail.data.movie.title}</h1>
          <div>평점 : {detail.data.movie.rating}</div>
          <hr />
          <img src={detail.data.movie.background_image_original} />
          <p>{detail.data.movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

// useParams() 함수를 사용하게 되면 React-Router가 변수를 넘겨줌

export default Detail;
