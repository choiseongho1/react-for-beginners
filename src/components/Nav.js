import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Main";
import styles from "./Nav.module.css";
import mainImg from "../images/main.png";
import NavList from "../atom/NavList";
import { useEffect, useState } from "react";
function Header() {
  const [page, setPage] = useState("1");

  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [focusPath, setFocusPath] = useRecoilState(focusNav);
  const onClick = () => {
    pageReLoading(true);
  };

  return (
    <div className={styles.header}>
      <Link to={`/Home`}>
        <img src={mainImg} className={styles.img} />
      </Link>

      <nav>
        <div>
          <ul className={styles.clear}>
            {NavList.map(({ title, path }) => {
              return (
                <li className={styles.wf}>
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
