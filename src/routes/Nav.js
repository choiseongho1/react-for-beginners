import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Main";

import mainImg from "../images/main.png";
import NavList from "../atom/NavList";
import { useEffect, useState } from "react";
function Header() {
  const [page, setPage] = useState("1");

  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [focusPath, setFocusPath] = useRecoilState(focusNav);
  const onClick = () => {
    console.log(onClick);
    pageReLoading(true);
  };

  return (
    <div>
      <Link to={`/Home`}>
        <img src={mainImg} />
      </Link>
      <ul>
        {NavList.map(({ title, path }) => {
          return (
            <li>
              <Link
                to={`/page/${path}/1`}
                onClick={focusPath !== path ? onClick : null}
                style={{
                  fontSize: "100",
                }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div></div>
    </div>
  );
}

export default Header;
