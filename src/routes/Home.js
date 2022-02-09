import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import navList from "../atom/NavList";

function Home() {
  return (
    <div>
      {navList.map((slide) => {
        return (
          <div>
            <h3>
              <Link to={`/page/${slide.path}/1`}>
                <span>{slide.title} Movie</span>
              </Link>
            </h3>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
