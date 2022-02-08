import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import mainImg from "../images/main.png";
function Header() {
  console.log("123");
  return (
    <div>
      <Link to={`/`}>
        <img src={mainImg} />
      </Link>
    </div>
  );
}

export default Header;
