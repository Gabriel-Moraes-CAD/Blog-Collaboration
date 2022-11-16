import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="img-navbar" src="/favicon.ico" />
      <ul className="navbar-btn">
        <Link href={"#"}>
          <li>Search</li>
        </Link>
        <Link href={"#"}>
          <li>All posts</li>
        </Link>
        <Link href={"#"}>
          <li>Categories</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
