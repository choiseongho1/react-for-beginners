import { Link } from "react-router-dom";
import mainImg from "../images/main.png";
import headerList from "../atom/HeaderList";
import { useState } from "react";
function Header() {
  const [page, setPage] = useState("1");
  const onClick = () => {
    console.log("selOption");
  };
  return (
    <div>
      <Link to={`/Home`}>
        <img src={mainImg} />
      </Link>
      <ul>
        {headerList.map(({ title, path }) => (
          <li key={title}>
            <Link onClick={onClick} to={`/${path}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div></div>
    </div>
  );
}

export default Header;
