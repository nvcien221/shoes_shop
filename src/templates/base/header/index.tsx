import React from "react";
import css from "./header.module.scss";

/** cách 1: */
import searchSvg from "src/assets/imgs/search.svg";

// import IconSearch from "src/assets/icons/search.icon";
// import IconCart from "src/assets/icons/cart.icon";

import { IconCart, IconSearch } from "src/assets/icons";

import imgLogo from "src/assets/imgs/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={css.header}>
      <Link to="/">
        <img src={imgLogo} />
      </Link>

      <div className={css["header-left"]}>
        <div className={css["header-left-search"]}>
          <IconSearch />
          <span>Search</span>
        </div>
        <div className={css["header-left-cart"]}>
          <IconCart />
          <span>(1)</span>
        </div>
        <div className={css["header-left-author"]}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
