import { Link } from "react-router-dom";
import mainList from "../atom/MainList";
import Ho from "../components/Ho";
function Home() {
  return (
    <div>
      {mainList.map((slide) => {
        return (
          <div>
            <h3>
              <Link to={`/page/${slide.path}/1`}>
                <span>{slide.title}</span>
              </Link>
            </h3>
            <Ho
              API={`https://api.themoviedb.org/3/discover/movie?${slide.path}&api_key=56190e9d8107fb6fe38424b5de13c69c&language=ko`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
