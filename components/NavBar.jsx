import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href={"/"}>
        <p className="img-navbar">Better THEN Blog</p>
      </Link>
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
