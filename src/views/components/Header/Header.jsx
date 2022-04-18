import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__logo">
          <h1>
            <Link to="/">
              <img
                src="https://www.picng.com/upload/pokeball/png_pokeball_43534.png"
                alt=""
              />
              <span>PokéDex</span>
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
