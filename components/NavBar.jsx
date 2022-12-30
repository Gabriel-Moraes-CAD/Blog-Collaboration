import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="img-navbar" src="/favicon.ico" />
      <ul className="navbar-btn">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/AllPosts"}>
          <li>Search</li>
        </Link>
        <Link href={"#"}>
          <li>Buy me a Coffee</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
